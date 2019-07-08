class Weather{
    constructor(city){       
        this.city = city
        this.key = '5d9f4e1a884f437ea29215449190707'
    }

    // fetch weather from api
    async getWeather(){
        const response = await fetch(`https://api.apixu.com/v1/forecast.json?key=${this.key}&q=${this.city}`)
        const responseData = await response.json()
        return responseData
    }
    // change location 
    changeLocation(city){
        this.city = city
    }
}

