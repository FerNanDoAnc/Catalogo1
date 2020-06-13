;
(function() {
    //variables
    let sticky = false
    let currentPosition = 0

    const imageCounter = $("[data-name='image-counter'").attr("content")

    $("#sticky-navigation").removeClass("hidden")
    $("#sticky-navigation").slideUp(0)
    console.log($(window).height());
    //click pqra quq aparezca el menu responsivo
    $("#menu-opener").on("click", toggleNav)
    $(".menu-link").on("click", toggleNav)

    checkScroll()
    isOpen()


    //Intervalos para las imagees fooda,b...
    setInterval(() => {
        if (currentPosition < imageCounter) {
            currentPosition++
        } else {
            currentPosition = 0
        }


        $("#gallery .inner").css({
            left: "-" + currentPosition * 100 + "%"
        })

    }, 4000)

    //$ es similar a escribir jQuery
    $(window).scroll(checkScroll)

    function checkScroll() {
        const inBottom = isInBottom()
        if (inBottom && !sticky) {
            //mostrar la navegacion sticky
            sticky = true
            stickNavigation()
        }
        if (!inBottom && sticky) {
            //ocultar la navegacion sticky
            sticky = false
            unStickNavigation()
        }
    }

    function isOpen() {
        //reloj de 24 horas
        let date = new Date()
        const current_hour = date.getHours()

        if (current_hour < 11 || current_hour > 20) {
            $("#is-open .text").html("Cerrado ahora <br> Abierto de 11:00 am a 8:00 pm")
        }

    }

    function toggleNav() {
        $("#responsive-nav ul").toggleClass("active")
        $("#menu-opener").toggleClass("glyphicon-menu-hamburger")
    }

    function stickNavigation() {
        $("#description").addClass("fixed").removeClass("absolute")
        $("#navigation").slideUp("fast")
        $("#sticky-navigation").slideDown("fast")
    }

    function unStickNavigation() {
        $("#description").removeClass("fixed").addClass("absolute")
        $("#navigation").slideDown("fast")
        $("#sticky-navigation").slideUp("fast")
    }

    function isInBottom() {
        const $description = $("#description")
        const descriptionHeight = $description.height()
        return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
    }
})()