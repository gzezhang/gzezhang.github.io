var a;
a = "this is javascript";
b = "will this work?";
console.log(a);
console.log(b);
console.log("37"-7);

var dataset = [4, 8, 15, 16, 23, 42, 50];

var div = document.createElement("div");
div.innerHTML = "Hello, Eric!";
document.body.appendChild(div);

d3.select("body").selectAll("p")
   .data(dataset)
   .enter()
   .append("p")
   .text("New paragraph");

