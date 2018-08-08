$(document).ready(function() {

    // Div actual
    add_clase($(".form-1"),"form-actual");
    // Activar boton "Atras"
    $(".anterior").prop('disabled', true);
});


//Pasar al siguiente step del formulario
$(document).on('click', ".siguiente", function() {
         
    // Obtener el elemnto actual
    let iform = get_class_actual($(".form-actual"));
    
    let class_actual = $(".form-" + (parseInt(iform)));
    let next_class = $(".form-" + (parseInt(iform) + 1));

    // Quitar clase actual
    rem_clase(class_actual,"form-actual");
    // Añadir clase OK
    add_clase(class_actual,"form-ok");
    // Añadir clase actual
    add_clase(next_class,"form-actual");

    // Si estamos en el ultimo step, nuevo nombre de boton
    if(iform == 5){
        $(this).text("FINALIZAR").addClass("finalizar").prop('disabled', true);
    }

    // Activar boton "Atras"
    $(".anterior").prop('disabled', false);
    
});

//Pasar al anterior step del formulario
$(document).on('click', ".anterior", function() {
         
    // Obtener el elemnto actual
    let iform = get_class_actual($(".form-actual"));
    
    let class_actual = $(".form-" + (parseInt(iform)));
    let class_anterior = $(".form-" + (parseInt(iform) - 1));

    // Quitar clase actual
    rem_clase(class_actual,"form-actual");
    // Quitar clase anterior ok
    rem_clase(class_anterior,"form-ok");
    // Añadir clase actual
    add_clase(class_anterior,"form-actual");

    // Cambiar nombre de boton    
    $(".siguiente").text("Siguiente").removeClass("finalizar").prop('disabled', false);

    // Desactivar boton "Atras"
    if (iform == 2){
        $(this).prop('disabled', true);
    }

});

//Finalizar formulario
$(document).on('click', ".finalizar", function() {         

    console.log("jola")
});

//Moverse por el formulario
$(document).on('click', ".nav-elem ", function() {         

    // Obtener el elemento actual
    let iform_actual = get_class_actual($(".form-actual"));
    // Obtener el elemento clickado
    let iform_click = get_class_actual($(this));
    // Maximo
    let max = Math.max(iform_actual, iform_click);
    let min = Math.min(iform_actual, iform_click);

    let diff = max - min;

    if (max == iform_actual){
        for (i=max;i>min;i--){
            $(".anterior").trigger('click');
        }
    }
    else{
        for (i=min;i<max;i++){
            $(".siguiente").trigger('click');
        }
    }
});


// Obtener el div con la class "form-actual"
function get_class_actual(elem) {

    let form_act     = elem;
    let intRegex     = /[0-9 -()+]+$/;  
    let obj_form     = form_act[0].parentElement.classList;
    let index        = search_obj(obj_form, "form-");
    let class_actual = obj_form[index];
    class_actual     = str2Query(class_actual);

    // index del form actual
    let iform = class_actual.match(intRegex);

    return iform[0];
}

// Añadir clase a los hijos del div actual
function add_clase (elem, clase) {

    elem.children().addClass(clase);
}

// Eliminar clase a los hijos del div actual
function rem_clase (elem, clase) {

    elem.children().removeClass(clase);
}

// Buscar en Object
function search_obj (obj, str) {
    
    let i, ivar;
    for (i=0; i<obj.length;i++){
        ivar  = obj[i];
         
        if (ivar.indexOf(str) != -1){
            index = i;
        }

    }
    return index;
}

// Str TO Query
function str2Query (str) {
    return "." + str
}