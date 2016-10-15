var user = function(username, temperature){
	this.user= username;
	this.temp= temperature;

	this.adminview= function(){
		console.log("User: "+ this.user +"\nTemperature: "+ this.temp);
	}
}

	
	var user1= new user()

	user1.adminview();


	var inquirer= require('inquirer');

	inquirer.prompt([

		{
			type:"input",
			name:"name",
			message:"what is your name?"
		},
		{
			type:"input",
			name:"zipcode",
			message:"what is your zipcode"
		}

		]).then(function(user){

			
		})