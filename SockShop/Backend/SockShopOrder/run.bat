echo SELECT 'CREATE DATABASE webshop_product_sockshoporder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_sockshoporder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_sockshoporder"

java -cp webshop.product.sockshoporder --module-path webshop.product.sockshoporder -m webshop.product.sockshoporder