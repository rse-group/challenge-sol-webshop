#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE webshop_product_eshoponcontainersorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_eshoponcontainersorder') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/webshop_product_eshoponcontainersorder"
done

java -cp webshop.product.eshoponcontainersorder --module-path webshop.product.eshoponcontainersorder -m webshop.product.eshoponcontainersorder &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait