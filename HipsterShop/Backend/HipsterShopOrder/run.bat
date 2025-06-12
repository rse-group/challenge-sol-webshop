echo SELECT 'CREATE DATABASE webshop_product_hipstershoporder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_hipstershoporder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_hipstershoporder"

java -cp webshop.product.hipstershoporder --module-path webshop.product.hipstershoporder -m webshop.product.hipstershoporder