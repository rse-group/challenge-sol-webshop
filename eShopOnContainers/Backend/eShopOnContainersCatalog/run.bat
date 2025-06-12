echo SELECT 'CREATE DATABASE webshop_product_eshoponcontainerscatalog' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_eshoponcontainerscatalog') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_eshoponcontainerscatalog"

java -cp webshop.product.eshoponcontainerscatalog --module-path webshop.product.eshoponcontainerscatalog -m webshop.product.eshoponcontainerscatalog