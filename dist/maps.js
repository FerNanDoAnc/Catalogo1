google.maps.event.addDomListener(window,"load",()=>{new google.maps.Map(document.getElementById("map"),{center:{lat:-12.073296,lng:-77.016578},zoom:15}),class{static get(o){if(!navigator.geolocation)return alert("No pudimos encontraar tu localizacion"),{lat:0,lng:0};navigator.geolocation.getCurrentPosition(t=>{o({lat:t.coords.latitude,lng:t.coords.longitude})})}}.get(o=>{console.log(o)})});