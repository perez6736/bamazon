CREATE DATABASE bamazon; 

USE bamazon; 

CREATE TABLE products (
    item_id int(10) AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price DECIMAL (10,2),
    stock_quantity INT(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('computer keyboard', 'Electronics', 99.98, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('computer mouse', 'Electronics', 49.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Playstation 4', 'Electronics', 299.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Work desk', 'Furniture', 89.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Desk chair', 'Furniture', 69.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Nightstand', 'Furniture', 29.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Flatscreen TV 50''', 'Electronics', 29.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Running shoes', 'Fitness', 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Lifting belt', 'Fitness', 19.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE('Protien shaker', 'Fitness', 9.99, 500);

