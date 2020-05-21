;(function (){
    class UserLocation{
        static get(callback){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((location)=>{
                    callback({
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    })
                })
            }else{
                alert("No pudimos encontraar tu localizacion")
            
                return{
                    lat: 0,
                    lng: 0
                }
                
            }
        }
    }
    google.maps.event.addDomListener(window,"load",()=>{
        const map=new google.maps.Map(
            document.getElementById('map'),
            {
                center:{
                    lat:-12.073296, 
                    lng:-77.016578
                },
                zoom:15
            }
        )
        UserLocation.get((coords)=>{
            console.log(coords)
        })
    })
})()