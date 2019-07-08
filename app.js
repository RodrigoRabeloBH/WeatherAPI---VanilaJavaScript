// Init weather and UI object
const weather = new Weather('Belo Horizonte')
const ui = new UI()
// get weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather)
// change locaiton event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.querySelector('#city').value
    weather.changeLocation(city)    
    // call get weather again 
    getWeather()
    // close modal
    $('#locModal').modal('hide')
    // clear Input City
    ui.clearField()
})

function getWeather(){
    weather.getWeather()
    .then(res =>{
        ui.paint(res)
    })
    .catch(err => alert(err))    
}

