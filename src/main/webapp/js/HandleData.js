var parsedData = []
var parsedData2 = []
var WTF = []

function loadData()
{
	parsedData = d3.csv("data/US_medals.csv", function(medals) {
		console.log(medals);

		for (i=0; i < medals.length; ++i)
		{
			WTF[i] = Banner(medals[i].Year, medals[i].Games, medals[i].Gold, medals[i].Silver, medals[i].Bronze, medals[i].Total, medals[i].Comments);
		}
	});

}

function otherLoad()
{
	parsedData2 = d3.csv("data/US_medals.csv", function(data) {
		console.log(data);
		parsedData2 = data.map(function(d) { return [ +d["Year"], +d["Games"]]});
		console.log(parsedData2);
	});
}

function printData()
{
	for (x in parsedData2)
	{
		d3.select("body")
		  .selectAll("p")
		  .data(parsedData)
		  .enter()
		  .append("p")
		  .text(function(d) { return d;});
	}
}