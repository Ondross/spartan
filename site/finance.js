// You input the curve of spending and your salary/retirement age. We tell you the magnitude of that that leads to $0/leavings/buffer at death.

$( function(){


	retirement_age = new Input("Retirement Age", 35) //retirement age
	retirement_age.initialize();

	current_age = new Input("Current Age", 24) //retirement age
	current_age.initialize();

	death_age = new Input("Death Age", 90) //retirement age
	death_age.initialize();

	salary = new Input("Salary", 57000) //retirement age
	salary.initialize();

	interest = new Input("Interest Rate", .08) //retirement age
	interest.initialize();

	cash = new Input("Current Cash", 10000) //retirement age
	cash.initialize();

	$("form").submit(function(event) {
		event.preventDefault();
		for (var i = 0; i < inputs.length; i++){
			inputs[i].update();}
		//Scalars
		c_age = current_age.value;
		r_age = retirement_age.value - c_age;         //retirement age
		d_age = death_age.value - c_age;         //death age
		sal   = salary.value;
		mag_spending = 1;   // iterate on this (or solve for it :-D )
		r = interest.value;             //interest rate
		current_cash = cash.value;

		//Arrays
		spending = [];
		deposits = [];
		earnings = [];
		withdrawals = [];
		bank_balance = [];


		// Build earnings array
		for (var i = 0; i < r_age; i++){
			earnings[i] = sal;
		}
		for (var i = r_age; i < d_age; i++){
			earnings[i] = 0;
		}


		// Build spending array  TODO make it an entry
		for (var i = 0; i < r_age; i++){
			spending[i] = 29000 + i * 200;
		}
		for (var i = r_age; i < d_age; i++){
			spending[i] = 30000 + 1 * 1000;
		}

		// Build deposits array
		for (var i = 0; i < d_age; i++){
			deposits[i] = earnings[i] - spending[i];
		}

		// Bank Balance
		bank_balance[0] = current_cash;
		for (var i = 1; i < d_age; i++){
			bank_balance[i] = bank_balance[i-1]*(1 + r) + deposits[i];
		}

		for (var i = 0; i < d_age; i++){
		console.log("Age: ", i + c_age, "  Money:  ", bank_balance[i].toFixed(1),  "  I: ", bank_balance[i] * r, "  D: ", deposits[i]);
		}
		return false;
});
})

