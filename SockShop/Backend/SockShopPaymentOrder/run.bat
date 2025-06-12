echo SELECT 'CREATE DATABASE webshop_product_sockshoppaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_sockshoppaymentorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_sockshoppaymentorder"

java -cp webshop.product.sockshoppaymentorder --module-path webshop.product.sockshoppaymentorder -m webshop.product.sockshoppaymentorder