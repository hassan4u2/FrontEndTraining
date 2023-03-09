const weatherApiKey = '51ade7e9b107468286a210704231702'

// MAIN FUNCTIONS
/************************************************/
async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        return ipAddress;
    } catch (error) {
        console.error(error);
        return null;
    }
}
/************************************************/
// ==> get by ip or city
async function getWeather(search_input) {
    console.log('search_input', search_input);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${search_input}&days=7`;
    const response = await fetch(url);
    const weather = response.json();
    return weather;
}
/************************************************/
async function fillDate() {
    const date = new Date();
    const day_in_text = date.toLocaleString('default', { weekday: 'long' });
    const day_in_number = date.getDate();
    const month_in_text = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const full_date = `${day_in_text}, ${day_in_number} ${month_in_text} ${year}`;
    // console.log('full_date', full_date);
    document.getElementById('full-date').innerHTML = full_date;
}
/************************************************/

async function formatDate(dateString) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
}

/************************************************/

async function fillLocation(location) {
    let full_location = `${location.name}, ${location.country}`;
    // console.log('full_location', full_location);
    document.getElementById('location-city').innerHTML = full_location;
}
/************************************************/

async function fillDayWeather(currentday) {
    // console.log('currentday', currentday);

    // fill the current day weather
    const icon = document.getElementById('day_image_icon').src = `https:${currentday.condition.icon}`;
    const temp_c = document.getElementById('curr-temp').innerHTML = `${currentday.temp_c}°C`;
    const condition = document.getElementById('curr-desc').innerHTML = `${currentday.condition.text}`;
    const wind_kph = document.getElementById('wind-speed').innerHTML = `${currentday.wind_kph} km/h`;
    const wind_dir = document.getElementById('wind-dir').innerHTML = `${currentday.wind_dir}`;
}
/************************************************/

async function fillWeekWeather(currentweek) {
    console.log('currentweek', currentweek);
    let week_rows_html = ``;
    for (let i = 0; i < currentweek.forecastday.length; i++) {
        let curr_day = currentweek.forecastday[i].day;
        week_rows_html += `
        <tr>
    <td scope="row" class="pt-3 align-middle">${await formatDate(currentweek.forecastday[i].date)}</td>
    <td class="pt-3 align-middle"><img
            src="https:${curr_day.condition.icon}"
            id="day_image_icon" alt="Weather Icon">${curr_day.mintemp_c} / ${curr_day.maxtemp_c} </td>
    <td class="pt-3 align-middle">${curr_day.condition.text}</td>
    <td class="pt-3 align-middle">${currentweek.forecastday[i].astro.sunrise}</td>
    <td class="pt-3 align-middle">${currentweek.forecastday[i].astro.sunset}</td>
</tr>`;
    }
    document.getElementById('week-rows').innerHTML = week_rows_html;

}

/************************************************/

async function fillWeather(search_input) {
    const weather = await getWeather(search_input);
    // console.log(weather);
    await fillLocation(weather.location);
    fillDayWeather(weather.current);
    fillWeekWeather(weather.forecast);

}
/************************************************/

// fill the weather data using the current ip address
async function fillDefaultWeather() {
    await fillDate();
    await fillWeather(await getIPAddress());
}

/************************************************/

// real time search
async function realTimeSearch() {
    const search_input = document.getElementById('search-input').value;
    await fillWeather(search_input);
}


// EVENT LISTENERS

// when page is loaded fill the weather data using the current ip address
window.addEventListener('load', async () => {
    await fillDefaultWeather();
});


// search on keyup
document.getElementById('search-input').addEventListener('keyup', async () => {
    await realTimeSearch();
});



