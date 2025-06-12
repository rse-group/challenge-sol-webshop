echo SELECT 'CREATE DATABASE webshop_product_sockshopcatalog' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_sockshopcatalog') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_sockshopcatalog"

java -cp webshop.product.sockshopcatalog --module-path webshop.product.sockshopcatalog -m webshop.product.sockshopcatalog