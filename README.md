# bamazon

## Setup 

1. Use the sschema.sql file to create a db
2. Change the sql variables in bamazonCustomer.js to connect to your local DB 
3. npm install all dependencies 
4. In the console run node bamazonCustomer.js 

## How it Works 

1. The program will display the products and ask you what product to order and how much

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/Customerview%20start%201.PNG "Image 1")

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/Database%20at%20start%201.PNG "DB 1")

2. Once the user enters the ID and quantity the program will print the total and update the DB 

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/purchase%20made%20and%20total%20displayed%202.PNG "Image 2")

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/database%20updated%20with%20new%20quantity.PNG "DB 2")

3. When the order is complete the program will ask the user to make another order 

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/new%20order%20is%20prompted.PNG "New Order")

4. If the user tries to order an more than whats in stock an error will display and ask the user to try agian. 

![alt text](https://github.com/perez6736/bamazon/blob/master/pics/screenshots/trying%20to%20order%20more%20than%20in%20stock.PNG "New Order")
