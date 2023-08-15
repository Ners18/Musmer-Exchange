### Create Exercises

1. Write a statement to create a simple table called countries. It should include the columns: country_id, country_name and region_id.
## => create table countries ( country_id int, country_name varchar(255), region_id int );



2. Write a statement to insert a record into your country table. Confirm that the record exists with SELECT * FROM countries.
## => insert into countries (country_id, country_name, region_id) values (123, 'china', 2023);
## => select * from countries;


3. Remove the countries table with DROP TABLE countries. Now write a statement to create the same table again, none of the fields should be able to be null. Confirm that this is the case by attempting to insert a record with null values.
## => drop table countries;
## => insert into countries (country_id, country_name, region_id) values (null, 'china', 2023);

# => {error} 
20:23:59	insert into countries (country_id, country_name, region_id) values (null, 'china', 2023)	Error Code: 1048. Column 'country_id' cannot be null	0.0042 sec


4. Remove the countries table and create it again. This time make sure that only the countries Italy, India and China are valid entries.
## => create table countries ( country_id int not null, country_name enum('Italy', 'India', 'China') not null, region_id int not null );

# => {error}
20:30:00	insert into countries (country_id, country_name, region_id) values (132, 'brazil', 2023)	Error Code: 1265. Data truncated for column 'country_name' at row 1	0.0039 sec


5. Delete and recreate this table. This time make sure that no duplicate data against column country_id will be allowed at the time of insertion.
## => create table countries ( country_id int not null unique, country_name varchar(255) not null, region_id int not null );



6. Now recreate the table, but this time make the country a key field. This can also be used to prevent duplicate data. 
## => create table countries ( country_id int not null unique, country_name varchar(255) not null primary key, region_id int not null );


7. Finally, recreate the table with the country_id as a primary key with auto increment. Insert a few records into the table to confirm that it is auto-incrementing this column.
## => create table countries ( country_id int primary key auto_increment, country_name varchar(255) not null, region_id int not null );
## => insert into countries (country_id, country_name, region_id) values ('132','chile', 2023)
## => insert into countries (country_id, country_name, region_id) values ('0','brazil', 2102)
## => insert into countries (country_id, country_name, region_id) values ('0','costa rica', 120)
## => insert into countries (country_id, country_name, region_id) values ('0','russia', 321)


8. Write a statement to create a table named jobs. It should have the columns job_id, job_title, min_salary, max_salary. You should make sure that salary cannot exceed 25000.
## => create table jobs ( job_id int auto_increment primary key, job_title varchar(255) not null, max_salary int , check (max_salary <= 25000 && max_salary >= 0), min_salary int, check (min_salary >= 0 && min_salary <= max_salary));

9. Write a SQL statement to create a table named job_history including columns employee_id, start_date, end_date, job_id and department_id and make sure that the value against columns start_date and end_date will represent date data types. 
## => create table job_history ( employee_id int not null auto_increment primary key, start_date date not null, end_date date not null, department_id int not null);



### Insert Exercises

## => create table countries ( country_id varchar(2) default(null), country_name varchar (40) default (null), region_id decimal(10, 0) );
## => insert into countries (country_id, country_name, region_id) values ('es', 'spain', 12 ), ('fr', 'france', 3), ('us', 'usa', 9); 



### Read Exercises
1. Write a query to get Product name and quantity per unit.

## => select product_name, quantity_per_unit from products;


2. Write a query to get a list of currently available products (id and name).


<!-- get more explanations -->



3. Write a query to get a list of discontinued products (id and name).
## => select id, product_name from products where discontinued = 1;

4. Write a query to get the name and price of the most expensive product.
## =>  select max(list_price) as mostexpensive from products;


5. Write a query to get the name and price of the least expensive product.
## => select min(list_price) as leastexpensive from products;

6. Write a query to get a list of products that cost less than $20.
## => select id, product_name, list_price from products where list_price < 20;

7. Write a query to get a list of products that cost between $15 and $25.
## => select id, product_name, list_price from products where list_price < 20 && list_price >15;

8. Write a query to get a list of the ten most expensive products.
## => select * from products order by list_price desc limit 10;
9. Write a query to get the count of all the current products and then the count of all the discontinued products.
## => select count(product_name) from products;
## => select count(product_name) from products where discontinued = 1;


### Update Exercises


1. Write a statement to change the email of every employee to 'not available'.
## => update employees set email_address = 'not available' ;

2. Write a statement to change the email of every employee to 'classified' and set everybody's first_name to Dave.
## => update employees set email_address = 'classified', first_name = 'dave';

3. Write a statement to change email to 'super top secret' and last_name to McSalesman for employees who's job_title is Sales Representative.
## => update employees set email_address = 'super top secret', last_name = 'McSalesman' where job_title = 'Sales Representative';

4. Write a statement to change the webpage of all the employees in Seattle to the Wikipedia page for Seattle.
## => update employees set web_page = 'https://en.wikipedia.org/wiki/Seattle' where city = 'Seattle';

# Extra Update 
1. Elizabeth Andersen recently married Roland Wacker. They have requested that you update the customer table to reflect the fact that Roland has taken Elizabeth's last name.
## => update customers set last_name = 'Wacker Andersen' where first_name = 'Roland';

2. The also request that you change the ship_name and ship_address on any orders that have not yet shipped to Roland. The ship name should reflect Roland's new last_name. The new address should match Elizabeth's.
## => UPDATE orders SET ship_name = 'Roland Wacker Andersen', ship_address = (SELECT ship_address FROM (SELECT * FROM orders) AS tempOrder WHERE tempOrder.ship_name = 'Elizabeth') WHERE id IN ( SELECT id FROM order_details_status WHERE id < 3 ) AND ship_name = 'Roland Wacker';



### Delete Exercises
1. Write a statement to delete the order with id 30 from the orders table. This is trickier than it seems. Remember that foreign key constraints prevent us from deleting records that are referenced in other tables. To get around foreign key constraints, you can: manually delete related records from other tables, alter the table to enable cascading deletes or remove foreign key constraints (temporarily or permanently). Think about the advantages and disadvantages of each of these options.

2. Delete any orders that are shipping to New York.
## => DELETE FROM orders WHERE ship_city = 'New York';

3. Delete any discontinued products from the product table.
## => DELETE FROM products WHERE discontinued = 1;


4. Pick a customer, delete them, any orders they have made, and any related data in the order_details table. Consider foreign key constraints again!

5. Delete the entire employee table.
Error Code: 1091. Can't DROP 'fk_employee_privileges_employees1'; check that column/key exists
## => drop table employees 



6. Delete the entire database.
## => drop database northwind



###
####
