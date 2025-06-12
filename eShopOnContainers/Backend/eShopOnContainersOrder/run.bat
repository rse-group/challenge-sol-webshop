echo SELECT 'CREATE DATABASE webshop_product_eshoponcontainersorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_eshoponcontainersorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_eshoponcontainersorder"

java -cp webshop.product.eshoponcontainersorder --module-path webshop.product.eshoponcontainersorder -m webshop.product.eshoponcontainersorder