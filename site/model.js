window.inputs =[]

function Input(name, default_val){
	this.name = name;
	this.default_val = typeof default_val !== 'undefined' ? default_val : 10;

	this.initialize = function(){
		var html_string = this.name + ": <input type='text' name='" + this.name + "'><br>";
		$(".inputs").append(html_string);
		this.div = $("input[name='" + this.name + "']");
		this.div.val(this.default_val);
		inputs.push(this);
	}

	this.update = function(){
		this.value = parseFloat(this.div.val());
}

}