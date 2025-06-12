#!/bin/bash
source ~/.zshrc  

cleanup() {
    pkill -P $$
    rm java.log
    exit 1
}

trap cleanup SIGINT

java -cp webshop.product.hipstershoppaymentorder --module-path webshop.product.hipstershoppaymentorder -m webshop.product.hipstershoppaymentorder 2>&1 | tee java.log &
JAVA_PID=$!
TEE_PID=$(pgrep -n tee)
tail -f java.log --pid=$TEE_PID | while read -r LINE; do
    if [[ "$LINE" == *"== CREATING OBJECTS AND BINDING ENDPOINTS =="* ]]; then
        break
    fi
done

echo "SELECT 'CREATE DATABASE webshop_product_hipstershoppaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_hipstershoppaymentorder') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/webshop_product_hipstershoppaymentorder"
done

wait