var body = d3.select("body");

var canvas = body.append("canvas")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

var ctx = canvas.node().getContext("2d");

var hed = d3.select("h1").text();

d3.timer(function(t) {
  body.style("-webkit-filter", "hue-rotate("+(Math.floor(body.node().scrollTop / 10) % 360)+"deg)");

  for (var i = 0 ; i < 10; i++) {
    ctx.fillStyle = i%2 == 0 ? "#000000" : "#ffffff";

    ctx.beginPath();
    ctx.arc(innerWidth/2, innerHeight/2, (20*(10-i)) + 200*(Math.sin(i*t/5000)+1), 0, 2 * Math.PI, false);
    ctx.fill();

  }


});
