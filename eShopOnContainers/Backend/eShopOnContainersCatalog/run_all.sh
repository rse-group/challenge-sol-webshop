#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE webshop_product_eshoponcontainerscatalog' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_eshoponcontainerscatalog') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/webshop_product_eshoponcontainerscatalog"
done

java -cp webshop.product.eshoponcontainerscatalog --module-path webshop.product.eshoponcontainerscatalog -m webshop.product.eshoponcontainerscatalog &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait