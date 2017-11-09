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
    // quantity of stock stored in varibale for later use 
    var stockQuantity;

    function getQuantityByID (itemID){
        
        bamazonDB.query('SELECT item_id, stock_quantity FROM products WHERE item_id = ' + itemID, function (error, results, fields) {
            if (error) throw error;
            //assign the variable the quantity to be used later to compare user input with this. 
            stockQuantity = results.stock_quantity; 
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

    purchaseItem(ID, quantity){
        // code to update column goes here. 
        // be sure to print the total price of the item 
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
    
            //this function assigns the stockQuantity variable according to the ID the user entered 
            getQuantityByID(answers.ID);

            //check to see if the stock_qunatity>answers.stock_qunatity of the item for item_id = ID
            if(answers.quantity < stockQuantity){
                // if the user put an amount and we have enough... update the table to remove answers.quantity form the column and 
                purchaseItem(); 
            }
    
        });
    }
    
    
    displayProducts();
}  

customerView();