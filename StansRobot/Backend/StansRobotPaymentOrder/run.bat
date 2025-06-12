echo SELECT 'CREATE DATABASE webshop_product_stansrobotpaymentorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_stansrobotpaymentorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_stansrobotpaymentorder"

java -cp webshop.product.stansrobotpaymentorder --module-path webshop.product.stansrobotpaymentorder -m webshop.product.stansrobotpaymentorder