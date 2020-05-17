;(function (){
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
    })
})()