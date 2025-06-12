#!/bin/bash
set -e

err() {
  echo "Error: $*" >&2  # Redirect error message to stderr
}

function external_module()
{
    if [ $1 == "payment.product.charity" ]; then
    cp external/PaymentCharity.jar $product/
    cp external/payment.method.core.jar $product/
    cp external/payment.method.doku.jar $product/
    echo " add external module"
    fi
}

function check_module()
{
    if [ $1 == "aisco.donation.pgateway" ]; then
    cp external/payment.page.core.jar $product/
    echo "  add external module"
    elif [ $1 == "aisco.financialreport.incomewithfrequency" ]; then
    sh ./genmodule.sh $1 $product
    echo "  generate module $1"
    elif [ $1 == "aisco.financialreport.expensewithfrequency" ]; then
    sh ./genmodule.sh $1 $product
    echo "  generate module $1"
    fi
}

function validate_product() {
  if [ "$1" == "webshop.cart" ]; then
    cart=true
  elif [ "$1" == "webshop.catalog" ]; then
    catalog=true
  fi
}

function build_module() {
  echo "building module $1"
  javac -d classes --module-path lib $(find src/$1 -name "*.java") src/$1/module-info.java
  jar --create --file lib/$1.jar -C classes .
  rm -rf classes  
  echo "Module $1 is ready"
}

function build_product() {
  echo -e "building the product: $mainclass"
  javac -d classes --module-path $product $(find src/$product -name "*.java") src/$product/module-info.java
  jar --create --file $product/$mainclass.jar --main-class $product.$mainclass -C classes .
  rm -rf classes 
  echo "Product $mainclass is ready"
}

function build_product_requirement() {
  echo " -- checking requirement -- "
  product=$1
  targetpath="src/$product/module-info.java"
  req=$(cat $targetpath | grep "requires \( transitive | static \)\?" | awk '{print $2}' | cut -d ';' -f 1)
  for requ in $req; do
    validate_product $requ
  done

  if [ "$cart" == true ] && [ "$catalog" == true ]; then
    for reqprod in $req; do
      if [[ $reqprod =~ "webshop" ]]; then
        echo -e "building requirement for $mainclass: $reqprod"
        check_module $reqprod
        javac -d classes --module-path $product $(find src/$reqprod -name "*.java") src/$reqprod/module-info.java
        jar --create --file $product/$reqprod.jar -C classes .
        rm -rf classes  # Corrected typo (rm -rf)
      else
        echo "check requirement from another product line"
        external_module $reqprod
      fi
    done
    echo "requirement building done"
    build_product
  else
    echo "product is not valid"
    echo "build failed"
  fi
}

product=$1
mainclass=$2
cart=false
catalog=false

if [ -d "$1" ]; then rm -rf $1; fi  # Corrected typo (rm -rf)
if [ -d "classes" ]; then rm -rf classes; fi  # Corrected typo (rm -rf)
if [ ! -d "lib" ]; then mkdir -p lib; fi

if [ -z "$mainclass" ]; then
  if [[ $1 =~ "webshop" ]]; then
    err "Please specify the main class in the product" >&2
    exit 1
  elif [ ! -d "src/$1" ]; then
    err "module does not exist" >&2
    exit 1
  else
    build_module $product
  fi
else
  if [ ! -d "src/$1" ]; then
    err "product does not exist" >&2
    exit 1
  else
    mkdir $product
    build_product_requirement $product
  fi
fi