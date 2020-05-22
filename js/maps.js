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

    const my_place ={
        lat:-12.073296, 
        lng:-77.016578
    }
    google.maps.event.addDomListener(window,"load",()=>{
        const map=new google.maps.Map(
            document.getElementById('map'),
            {
                center: my_place,
                zoom:15
            }
        )
        
        const marker=new google.maps.Marker({
            map:map,
            position:my_place,
            title:"Nombre del restaurant",
            visible:true
        })

        UserLocation.get((coords)=>{
            //calcular distancia entre el resturante y el usuario
            let origen= new google.maps.LatLng(coords.lat,coords,lng)//LATlng
            let destino= new google.maps.LatLng(my_place.lat,my_place,lng);//Latlbg

            let service=new google.maps.DistanceMatrixService()
            service.getDistanceMatrix({
                origins:[origen],
                destination:[destino],
                travelMode: google.maps.travelMode.DRIVING
            },(response,status)=>{

                if(status==google.maps,DistanceMatrixStatus.OK){
                    const duration_element= response.rows[0].elements[0]
                    const duracion_viaje=duration_element.duration.text
                    //alt96
                    document.querySelector("#message").innerHTML=`Estas a ${duracion_viaje} de una comida inolvidable en<span class="acme-script medium">Nombre del restaurante</span>`
                            
                }
                //para dos destinos o mas   
                /*[
                    [origen-destino,origen-destino2],
                    [origen2-destino,origen2-destino2]
                ]
                */
            })
        })
    })
})()