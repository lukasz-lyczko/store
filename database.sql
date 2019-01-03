DROP DATABASE IF EXISTS store;
CREATE DATABASE store;
\c store;

CREATE TABLE category
(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);

CREATE TABLE brand
(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);

CREATE TABLE product
(
  id    SERIAL PRIMARY KEY,
  name  VARCHAR (255) UNIQUE NOT NULL,
  description VARCHAR (255) NOT NULL,
  price NUMERIC (12,2) NOT NULL,
  category_id INT REFERENCES category(id) ON DELETE RESTRICT,
  brand_id INT REFERENCES brand(id) ON DELETE RESTRICT,
  gender varchar (1)
);

CREATE TABLE image
(
  id SERIAL PRIMARY KEY,
  path VARCHAR(255),
  product_id INT REFERENCES product(id) ON DELETE CASCADE
);

CREATE TABLE review
(
  id SERIAL PRIMARY KEY,
  rating INT,
  comment VARCHAR(255),
  product_id INT REFERENCES product(id) ON DELETE CASCADE
);

CREATE TABLE color
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  rgb_value VARCHAR(7)
);

CREATE TABLE size
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(5),
  description VARCHAR(255)
);

CREATE TABLE stock
(
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  product_id INT REFERENCES product(id) ON DELETE RESTRICT,
  color_id INT REFERENCES color(id) ON DELETE RESTRICT,
  size_id INT REFERENCES size(id) ON DELETE RESTRICT
);

CREATE TABLE customer
(
  id uuid PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE sales_order
(
  id INT PRIMARY KEY,
  customer_id uuid REFERENCES customer(id) ON DELETE RESTRICT
);

CREATE TABLE sales_order_item
(
  product_id INT NOT NULL,
  order_id INT,
  quantity INT,
  item_price NUMERIC(12,2) NOT NULL,
  PRIMARY KEY (product_id, order_id)
);


-- INSERT INTO pups (name, breed, age, sex)
-- VALUES ('Tyler', 'Retrieved', 3, 'M');