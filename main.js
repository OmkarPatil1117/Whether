let getData = (city)=> {
	document.querySelector(".loading").innerHTML = `<img src="./assets/Curve-Loading.gif" alt="" width="100%" height="70%">`
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '154b70fc40msh1cee0ecf37882b0p18d05djsn642317807383',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city == undefined ? "Delhi" : city}`, options)
		.then(response =>  response.json())
		.then(response => {
			document.querySelector(".city").innerHTML = city == undefined ? "Delhi" : city
			document.querySelector("#windLine").innerHTML = `Wind Speed = ${response.wind_speed}`;
			document.querySelector("#windLine2").innerHTML = `Wind degrees = ${response.wind_degrees}`;
			document.querySelector("#windLine3").innerHTML = `Cloud PCT = ${response.cloud_pct}`;
	
			document.querySelector("#temp").innerHTML = `Temperature = ${response.temp} degree`
			document.querySelector("#temp2").innerHTML = `Humidity = ${response.humidity}`
			document.querySelector("#temp3").innerHTML = `Min - tempertaure = ${response.min_temp}`
			document.querySelector("#temp4").innerHTML = `Max - tempertaure = ${response.max_temp}`
	
			document.querySelector("#co").innerHTML = `Sunrise Co-ordinates = ${response.sunrise}`
			document.querySelector("#co2").innerHTML = `Sunset Co-ordinates = ${response.sunset}`
			document.querySelector(".loading").innerHTML = ``;
		})
		.catch(err => console.error(err));
}
getData();
document.querySelector(".btn-outline-success").addEventListener("click", (e)=> {
	e.preventDefault();
	let data = document.querySelector(".form-control").value;
	getData(data)
})
