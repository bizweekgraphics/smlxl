var mousemoves = [];

d3.select("body").on("mousemove", function(d) {
  if(mousemoves.length && new Date() - mousemoves[mousemoves.length-1].time < 500) {
    return;
  }
  mousemoves.push({
    "time": new Date(),
    "position": d3.mouse(this)
  });
});

function playMousemoves() {
  var ghost = d3.select("body").append("div")
    .classed("mouseghost", true);

  var xCoords = mousemoves.map(function(d) { return d.position[0]; }),
      yCoords = mousemoves.map(function(d) { return d.position[1]; });

  var xScale = d3.scale.linear()
        .domain(d3.range(xCoords.length))
        .range(xCoords)
        .clamp(true),
      yScale = d3.scale.linear()
        .domain(d3.range(yCoords.length))
        .range(yCoords)
        .clamp(true);

  d3.timer(function(t) {
    t = t/1000;
    ghost
      .style("left", xScale(t)+"px")
      .style("top", yScale(t)+"px");
  })
}