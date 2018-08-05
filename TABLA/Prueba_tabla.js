function change_nom(new_str) {
    $(document).ready(function() {
    	//Coger la clase del primer <p>
        let pClass = $("p:first").attr('class');
        // Coger el string
        let pText = $("p").text();

        console.log(pClass+ " says " +pText.trim());

        // Remplazar lo que ponga 
        $("p").html(new_str);

        // Buscar parrafo nuevo
        let p_ok = $("p:contains('Nuevfro')");
        // Mostrar si se ha encontrado
        console.log($.isEmptyObject(p_ok[0]));
    });
}


//Cambiar el color del icono
$(".info").on('click', function() {

    let str = $(this).text();
    let addc = "add_circle";
    let remc = "remove_circle";

    if (str == addc) {
        $(this).html(remc);
    }
    else if (str == remc) {
        $(this).html(addc);
    }

});

//Borrar fila en table
$(".delete").on('click', function(){

    let fila = $(this).closest("tr").remove();

});

//Deshacer Borrar fila en table
$(".undo").on('click', function(){



});