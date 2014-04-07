$(function(){

  //write code here...
  	function Donut(type, color, tasty) {
	  	this.type = type;
	  	this.color = color;
	  	this.tasty = tasty;
	  	this.create = function (){
			$('#donut-list').append('<li>'+
				'type: '+this.type+ '<br>'+
				'color: '+this.color+ '<br>'+
				'tasty: '+this.tasty+'</li>');
	  	};

	};
	Donut.all = [];

	$('#create').click(function(){
		var type = $('#type').val();
		var color = $('#color').val();
		var tasty = $('#tasty').val();
		var donut = new Donut(type, color, tasty);
		Donut.all.push(donut);
		donut.create();
	});
});

