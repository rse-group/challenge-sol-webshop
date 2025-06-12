echo SELECT 'CREATE DATABASE webshop_product_hipstershopcatalog' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_hipstershopcatalog') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_hipstershopcatalog"

java -cp webshop.product.hipstershopcatalog --module-path webshop.product.hipstershopcatalog -m webshop.product.hipstershopcatalog