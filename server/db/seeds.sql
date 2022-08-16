-- users seeds
INSERT INTO users (email, name, password, owner) VALUES ('nathandouglaslunn@gmail.com', 'Nathan lunn', '1234', true);
INSERT INTO users (email, name, password) VALUES ('summerjadedub@gmail.com', 'Summer Dube', '1234');

-- products seeds
INSERT INTO products (name, description, price, stock) VALUES ('flash rubber soles','A pair of sneakers made with care. Sure to create envy in your hate-fans.', 79.99, 6);
INSERT INTO products (name, description, price, stock) VALUES ('churn up hoddie', 'made with care for the care takers', 108.99, 15);
INSERT INTO products (name, description, price, stock) VALUES ('break even more', 'profit is overrated', 119.99, 4);
INSERT INTO products (name, description, price, stock) VALUES ('no sweat pants', "I don't workout but I don't don't workout..", 59.99, 20);
INSERT INTO products (name, description, price, stock) VALUES ('all cap cap', "doesn't matter what I say you won't believe it", 34.99, 30);
INSERT INTO products (name, description, price, stock) VALUES ('f*ck fit bit' "the only steps I'm keeping track of are the ones to financial freedom", 9.99, 40);

-- categories seeds
INSERT INTO categories (name) VALUES ('shoes');
INSERT INTO categories (name) VALUES ('tops');
INSERT INTO categories (name) VALUES ('bottoms');
INSERT INTO categories (name) VALUES ('hats');
INSERT INTO categories (name) VALUES ('accessories');

-- product_category seeds
INSERT INTO product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO product_category (product_id, category_id) VALUES ();
INSERT INTO product_category (product_id, category_id) VALUES ();
INSERT INTO product_category (product_id, category_id) VALUES ();
INSERT INTO product_category (product_id, category_id) VALUES ();
INSERT INTO product_category (product_id, category_id) VALUES ();