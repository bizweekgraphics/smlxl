var body = d3.select("body");

var canvas = body.append("canvas")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

var ctx = canvas.node().getContext("2d");
ctx.textBaseline = 'middle';
ctx.textAlign = "center";

var hed = d3.select("h1").text(),
    hedArray = hed.split(" ");

d3.timer(function(t) {

  var scrollTop = body.node().scrollTop;

  var circles = d3.range(100).map(function(i) { return (10*(100-i) + t/10000) % 1000; }).sort(d3.descending);
  circles.forEach(function(d, i) {
    ctx.fillStyle = d3.rgb("hsl(0,0%,"+Math.floor(.5*(Math.sin(d*t/10000) + 1)*100)+"%)").toString();
    ctx.beginPath();
    ctx.arc(innerWidth/2, innerHeight/2, d, 0, 2 * Math.PI, false);
    ctx.fill();
  })

  for (var i = hedArray.length - 1; i >= 0; i--) {
    ctx.globalAlpha = Math.min(1, Math.max(0, 1 - (scrollTop/200 - i)));

    ctx.font = "bold "+Math.floor((scrollTop*2/(i*i+1)))+"px sans-serif";

    ctx.fillStyle = i%1 == 0 ? "#000000" : "#ffffff";
    ctx.fillText(hedArray[i], innerWidth/2, innerHeight/2);

    ctx.strokeStyle = i%1 == 1 ? "#000000" : "#ffffff";
    ctx.strokeText(hedArray[i], innerWidth/2, innerHeight/2);
  };
  ctx.globalAlpha = 1;

});

var invert;
d3.select(window).on("scroll", function() {
  var oldInvert = invert;
  invert = Math.floor(body.node().scrollTop / 1000) % 2 == 1;
  if(invert !== oldInvert) body.classed("invert", invert);
})

function cycleRadius(t,i) {
  return (20*(10-i)) + 200*(Math.sin(i*t/5000)+1);
}