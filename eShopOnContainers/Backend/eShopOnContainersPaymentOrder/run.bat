echo SELECT 'CREATE DATABASE webshop_product_eshoponcontainerspaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_eshoponcontainerspaymentorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_eshoponcontainerspaymentorder"

java -cp webshop.product.eshoponcontainerspaymentorder --module-path webshop.product.eshoponcontainerspaymentorder -m webshop.product.eshoponcontainerspaymentorder