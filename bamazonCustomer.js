// needs inquier and sql npms 

var inquirer = require('inquirer');
var db = require('mysql'); 

var bamazonDB = db.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bamazon'
  });


function customerView(){

    function purchaseItem (itemID, quantityPurchased){
        
        // query the quantity of the item purchase
        bamazonDB.query('SELECT item_id, stock_quantity FROM products WHERE item_id = ' + itemID, function (error, results, fields) {
            if (error) throw error;
            //assign the variable the quantity to be used later to compare user input with this. 
            var stockQuantity = results[0].stock_quantity; 
            // had to put this here cause this is async stuff and happens out of order. 
            //check to see if the stock_qunatity>answers.stock_qunatity of the item for item_id = ID
            if(quantityPurchased <= stockQuantity){
                // if the user put an amount and we have enough... update the table to remove answers.quantity form the column and 
                // async stuff doesnt matter here cause nothing depends on anyhting here. 
                setQuantityOfItem(itemID, quantityPurchased); 
                getTotalPrice(itemID, quantityPurchased);
                customerView();
            }

            else{
                console.log("Insufficient quantity! \n");
                customerView();
            }

       });
    }
    
    //display the inventory product and prices 
    function displayProducts(){
        
        bamazonDB.query('SELECT item_id, product_name, price FROM products', function (error, results, fields) {
         if (error) throw error;
         
            for(i=0; i<results.length; i++){
                console.log(`ID: ${results[i].item_id}, Product name: ${results[i].product_name}, Price: ${results[i].price}`);
            }
            //after displaying the data we want to prompt the user what to buy and how much 
            promptUserToBuy();
       });
    }

    function getTotalPrice(ID, quantity){
        bamazonDB.query('SELECT price FROM products WHERE item_id = ?', [ID], function (error, results, fields) {
            if (error) throw error;

            //set total price of purchase to a variable. 
            var totalPrice = results[0].price * quantity; 
            console.log(`Your total is: $${totalPrice.toFixed(2)}\n`);

          });
    }

    function setQuantityOfItem(ID, quantity){
        // update the quantity of the item 
        bamazonDB.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?', [quantity, ID], function (error, results, fields) {
            if (error) throw error;

          });
    }
    
    function promptUserToBuy(){
        inquirer.prompt([
            {
                type: "input",
                name: "ID",
                message: "Enter the ID of the product you want to purchase.",
                validate: function(answer){
                    var regex = /^[0-9]+$/;
                    if (answer.match(regex)){
                        return true;
                    }
                    console.log("\n Please enter a valid ID");
                    return false;
                }
            },
            {
                type: "input",
                name: "quantity",
                message: "How much do you want to order?",
                validate: function(answer){
                    var regex = /^[0-9]+$/;
                    if (answer.match(regex)){
                        return true;
                    }
                    console.log("\n Please enter a valid ID");
                    return false;
                }
        
            }
        ])
        
        .then(function (answers) {
    
            //does the whole purchase 
            purchaseItem(answers.ID, answers.quantity);

    
        });
    }
    
    
    displayProducts();
}  

customerView();