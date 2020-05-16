;(function(){

    //$(".step:ntp-child(1)").addClass("active")
    ///console.log($(".step.active").index())
    const selector="#contact-form"
    $("step textarea").on("keydown",(ev)=>{
        if(ev.keyCode==13){
            ev.preventDefault
            $(ev.target).blur()
        }
    })
    $(".path-step").on("click",(ev)=>{
        const $current_circle=$(ev.target)
        focus_circle($current_circle)
        //$(".path-step.active").removeClass("active")
        //$current_circle.addClass("active")
        //console.log($current_circle.index(".path-step"))

        const posicion =$current_circle.index(".path-step")  + 1
        
        let $test=$(".step:nth-child("+posicion+")")
        siguiente($test) 
    })
    //para los eventos
    $(selector).find(".input").on("change",(ev)=>{
        const $input=$(ev.target)

        const $next_step =$input.parent().next(".step")
        
        const is_form_valid= es_valido_formulario

        if(!is_form_valid && $next_step.lenght>0){
            siguiente($next_step)  
        }else{
            validar_formulario()
        }
        

    })

    //funciones d ayuda
    function validar_formulario(){
        if(es_valido_formulario){
            enviar_formulario()
        }else{
            let $fieldset_invalido=$(selector).find("input:invalid").first().parent()
            siguiente($fieldset_invalido)
        }
    }
    function es_valido_formulario(){
        return document.querySelector(selector).checkValidity()

    }
    function siguiente($next_step){
        $(".step.active").removeClass("active")
        $next_step.addClass("active")
        $next_step.find(".input").focus()
        //$next_input.focus() 
        
        //cordinar los circulos
        const posicion = ($next_step.index(".step") *2 )+ 1
        //console.log(posicion)
        
        const $circle = $(".path-step:nth-child("+posicion+")").addClass("active")
        focus_circle($circle)
    }
    function focus_circle($circle){
        $(".path-step.active").removeClass("active")
        $circle.addClass("active")
    }
    function enviar_formulario(){
        const $form=$(selector)
        $.ajax({
            url: $form.attr("action"),
            method: "POST",
            data: $form.formObject(),
            dataType: "json",
            success: function(){
                $form.slideUp()
                $("#info-contacto").html("Mensaje enviado. \n Nos contactaremos contigo en breve")
                //alert("Mensaje enviado, se le atendera pronto.\nGracias!!")
            }
        })
    }
})()