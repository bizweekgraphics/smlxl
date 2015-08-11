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

  // body.style("-webkit-filter", "hue-rotate("+(Math.floor(body.node().scrollTop / 10) % 360)+"deg)");

  for (var i = 0 ; i < 10; i++) {
    ctx.fillStyle = i%2 == 0 ? "#000000" : "#ffffff";

    ctx.beginPath();
    ctx.arc(innerWidth/2, innerHeight/2, (20*(10-i)) + 200*(Math.sin(i*t/5000)+1), 0, 2 * Math.PI, false);
    ctx.fill();
  }

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
