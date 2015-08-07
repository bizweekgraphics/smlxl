var grafs = d3.selectAll("p").each(function(d,i) {
  d3.select(this).datum({"offsetTop": this.offsetTop});
})

grafs
  .style("position", "absolute")
  .style("top", function(d) { return d.offsetTop + "px"; });

d3.select(window).on("scroll", function(d) {
  grafs
    // .each(function(d) {
    //   if (d.offsetTop > d3.select("body").node().scrollTop) {
    //     return true;
    //   } else {
    //     d3.select(this)
    //       .style("position", "fixed")
    //       .style("top", 0);
    //   }
    // })
    .style("top", function(d) { 
      return Math.max(d.offsetTop, d3.select("body").node().scrollTop) + "px"; 
    })
})