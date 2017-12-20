# groupTravelApp

Main Page 
	
	- displays top 5 worldwide destinations in right corner for user to search from
		- pull from dataset to get these
		- needs to come in as a link to click which will then query a search

	- displays most recent 5 places traveled from our users for a user to search from
		- gets pulled from our database
		- needs to come in as a link to click which will then query a search

	- has a place for user to create their own recent travel experience
		- creates a new user
		- get the information on which city they traveled to
		- get their comments on the trip
		- stores to our database

	- search bar for user to search for a city 
		- run this search against our database to see if there are any intries existing
		- run api searches no mattter what and display results

Once user clicks or searches something...
	
	- show the user the following
		- comment from the author regarding their trip
		- api results for hotels from hotels.com
		- api results from trip advisor regarding attractions
		- api results from priceline on flight costs
			-need to access googlemaps api to get our location for ticket search
		- give them option to return to home page
			- or to just create another search



Over all things to do... 
	
	- get links to following api's
		- google maps
		- priceline
		- hotels.com
		- trip advisor

	- get the api's working

	- find and get link to data set for travel hot spots
		- this will get rendered via server and handlebars

	- create layout and interface
		- need places for stuff to go
		- need search box

	- settup backend
		- server
		- routes
		- config / models folders initialized by sequelize
		- schema of dummy data
		- link our database to handlebars and display data

	- Once we have basic layout and our api's going...
		- settup click handlers for all buttons
			- we need one to be able to create posts 
			- we need to be able to query 



