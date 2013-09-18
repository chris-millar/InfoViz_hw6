Steven Millar
Tzu Li

Olympic Medals Dataset

We used Chrome v29. To run our viz, startup a python server in the dir containing 'index.html' and then open the browser to 
localhost: XXXX. Our data will load on "Total Medals" and from here you can mouseover bars to see dod about each olympic games
for the category you are on. The category can be changed at the bottom using the labeled circle 'buttons'. 

REFERENCE:
We used Barchart_3.html as inspiration for the way in which we parsed and used the data from the csv file, as well as the basic 
sturture for "creating" a bar in a bar graph as well as how to dynamically generate a y-axis using d3. From this foundation we
added functionality such as brushing, animating the bars being drawn, and dynamic redrawing of the chart based on the selected category.
In additon, we developed the previously static generation of the bargraph into a function which allows us to dynamically rebuild the 
chart (axis, range, text) and the bars. 
