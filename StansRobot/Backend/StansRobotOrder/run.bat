echo SELECT 'CREATE DATABASE webshop_product_stansrobotorder' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'webshop_product_stansrobotorder') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/webshop_product_stansrobotorder"

java -cp webshop.product.stansrobotorder --module-path webshop.product.stansrobotorder -m webshop.product.stansrobotorder