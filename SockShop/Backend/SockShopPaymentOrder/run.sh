#!/bin/bash
source ~/.zshrc  

cleanup() {
    pkill -P $$
    rm java.log
    exit 1
}

trap cleanup SIGINT

java -cp webshop.product.sockshoppaymentorder --module-path webshop.product.sockshoppaymentorder -m webshop.product.sockshoppaymentorder 2>&1 | tee java.log &
JAVA_PID=$!
TEE_PID=$(pgrep -n tee)
tail -f java.log --pid=$TEE_PID | while read -r LINE; do
    if [[ "$LINE" == *"== CREATING OBJECTS AND BINDING ENDPOINTS =="* ]]; then
        break
    fi
done

echo "SELECT 'CREATE DATABASE webshop_product_sockshoppaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_sockshoppaymentorder') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/webshop_product_sockshoppaymentorder"
done

wait