var w = 300, //width 
         h = 300, //height 
         r = 100, //radius 
         color = d3.scale.ordinal().range(["#ff5200", "#ff8f00", 
 "#ffc200", "#fff500", "#beea00", "#1dd100", "#ff5200", "#ff8f00", 
 "#ffc200"]); 

    var vis = d3.select("#rep_code1_update_categories") 
         .append("svg:svg") 
         .data([suData]) 
         .attr("width", w) 
         .attr("height", h) 
         .append("svg:g") 
         .attr("transform", "translate(" + r + "," + r + ")"); 

    var arc = d3.svg.arc() 
         .outerRadius(r); 

    var pie = d3.layout.pie() 
         .value(function (d) { return d.PostCount; }); 

    var arcs = vis.selectAll("g.slice") 
         .data(pie) 
         .enter() 
         .append("svg:g") 
         .attr("class", "slice") 
         .on("mouseover", function (d, i) { 
             //Mouse over code here 
 // CAN I ACCESS THE SLICE/WEDGE/ARC here and then animate it 
             writeDebug('entered : ' + suData[i].CategoryName); 
         }); 

    arcs.append("svg:path") 
                 .attr("fill", function (d, i) { return color(i); }) 
                 .attr("d", arc); 

    var key = $("#rep_code1_update_categories_key"); 
     for (var f = 0; f < suData.length; f++) { 
         key.append($('<div id=rep_code1_status_categories_legend_' + 
 suData[f].CategoryName + ' style=background-color:' + color(f) + ';>' 
 + suData[f].CategoryName + '</div>')); 
     }