class UI{
    constructor(){
        this.location = document.querySelector('#w-location')
        this.desc = document.querySelector('#w-desc')
        this.temp = document.querySelector('#w-string')
        this.details = document.querySelector('#w-details')
        this.icon = document.querySelector('#w-icon')
        this.humidity = document.querySelector('#w-humidity')
        this.feelslike = document.querySelector('#w-feels-like')
        this.precip_mm = document.querySelector('#w-precip_mm')
        this.wind = document.querySelector('#w-wind')        
    }
    paint(weather){
        console.log(weather)
        this.location.textContent = weather.location.name
        this.desc.textContent = weather.current.condition.text
        this.icon.setAttribute('src',weather.current.condition.icon)
        this.temp.textContent = `Temperatura: ${weather.current.temp_c} ºC (${weather.current.temp_f} ºF)`
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`
        this.feelslike.textContent = `Feels Like: ${weather.current.feelslike_c} ºC`
        this.precip_mm.textContent = `Precip: ${weather.current.precip_mm} mm`
        this.wind.textContent = `Wind: "${weather.current.wind_dir}" ${weather.current.wind_kph} Kph`
        
    }
    clearField(){        
            document.querySelector('#city').value =''
        }
    }
