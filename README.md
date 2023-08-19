# Weather-App
The App utilizes Weather API to display real-time Weather forecast and here's the link to the API: https://www.weatherapi.com/
the idea behind this app is just to display the ability to fetch data from API and display it properly.
Enough with this weak intro let's dive into the real thing, simply I fetched the API through making a function called dope applying async and await to it and using JSON to convert the data from readablestream to an array of object. 
So after receiving the data from the API and successfully displaying it into the page here comes the important point which is the search, so I sent the parameters of dope(city), the city receives the value coming from the input search through after grabbing the input through document.getElementById('search') and stored it into a variable called search, then added event onkeyup to send each letter entered by the user to the API link.
To clear things up a little the API search functions through adding the name of the city in the link which can be done easily by writing the API link within backtick and adding the parameter which was sent to dope function within it right after the search query like this: `the link of API &q=${city}`
By this way every time the user entered a letter on keyboard it get sent right to the search query so the API fetches forecast data about the city that was sent to the search query
