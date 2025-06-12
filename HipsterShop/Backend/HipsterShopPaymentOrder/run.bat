echo SELECT 'CREATE DATABASE webshop_product_hipstershoppaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_hipstershoppaymentorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_hipstershoppaymentorder"

java -cp webshop.product.hipstershoppaymentorder --module-path webshop.product.hipstershoppaymentorder -m webshop.product.hipstershoppaymentorder