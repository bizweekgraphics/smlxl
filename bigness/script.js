d3.selectAll("p").each(function(d,i) {
  console.log(i);
  d3.select(this).style("font-size", (200/(i+30))+"em");
});