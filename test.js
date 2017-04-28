var a;
a = "this is javascript";
b = "will this work?";
console.log(a);
console.log(b);
console.log("37"-7);

var dataset = [4, 8, 15, 16, 23, 42, 50, 60];

var div = document.createElement("div");
div.innerHTML = "Hello, Eric!";
document.body.appendChild(div);

d3.select("body").selectAll("p")
   .data(dataset)
   .enter()
   .append("p")
   .text( function(d) { return d; } )
   .style("color", "red");

var ob = {
	name: "eric",
	gender: "male",
	age: 45,
	fun: function() {  return 1;  }
   };

ob.job = "engineer";

console.log(ob.name);
console.log(ob.age);   