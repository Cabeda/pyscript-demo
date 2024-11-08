import duckdb

print("Hello world")

# duckdb run select 1
x = duckdb.sql("select 1")

print(x)
