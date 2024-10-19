// fetch("https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=74a9f8138b54fb054766bda5fc51fd65")
// .then(response=>{response.json().then(result=>{console.log(result)})})

function getCurrentPosition() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }
}


async function getTemperature() {
    const position = await getCurrentPosition();
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89c3a32c842df9b62ecfc1b836cde6cb`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.main.temp
}
async function newUpdates() {
    const temp = await getTemperature();
    const h2 = document.querySelector("h2");
    const icon = document.querySelector("img")
    h2.textContent = temp - 273.15 + "°C"
}
newUpdates()
getCurrentPosition().then(position => {
    console.log(position);
})





