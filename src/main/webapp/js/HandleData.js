var parsedData = []
var sortedByGold = []
var sortedBySilver = []
var sortedByBronze = []
var sortedByTotal = []
var sortedByYear = []

function loadData()
{
	parsedData = d3.csv("data/US_medals.csv", function(medals) {
		parsedData = medals;
	});

}

function printData()
{
	d3.select("body")
	  .selectAll("p")
	  .data(parsedData)
	  .enter()
	  .append("p")
	  .text(function(d) { return d.Year;});
}

function sortByGold()
{
	sortedByGold = parsedData;
	sortedByGold.sort(function(a, b) {
		if (a.Gold < b.Gold)
			return 1;
		if (a.Gold > b.Gold)
			return -1;
		return 0;
	});
}

function sortBySilver()
{
	sortedBySilver = parsedData;
	sortedBySilver.sort(function(a, b) {
		if (a.Silver < b.Silver)
			return 1;
		if (a.Silver > b.Silver)
			return -1;
		return 0;
	});	
}

function sortByBronze()
{
	sortedByBronze = parsedData;
	sortedByBronze.sort(function(a, b) {
		if (a.Bronze < b.Bronze)
			return 1;
		if (a.Bronze > b.Bronze)
			return -1;
		return 0;
	});	
}

function sortByTotal()
{
	sortedByTotal = parsedData;
	sortedByTotal.sort(function(a, b) {
		if (a.Total < b.Total)
			return 1;
		if (a.Total > b.Total)
			return -1;
		return 0;
	});	
}

function sortByTotal()
{
	sortedByYear = parsedData;
}