#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE webshop_product_stansrobotorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_stansrobotorder') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/webshop_product_stansrobotorder"
done

java -cp webshop.product.stansrobotorder --module-path webshop.product.stansrobotorder -m webshop.product.stansrobotorder &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait