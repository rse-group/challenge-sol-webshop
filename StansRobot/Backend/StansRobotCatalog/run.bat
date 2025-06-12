echo SELECT 'CREATE DATABASE webshop_product_stansrobotcatalog' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_stansrobotcatalog') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_stansrobotcatalog"

java -cp webshop.product.stansrobotcatalog --module-path webshop.product.stansrobotcatalog -m webshop.product.stansrobotcatalog