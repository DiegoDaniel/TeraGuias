$(document).ready(function(){

    $("#labelMenuNav").addClass("d-none");

    $(".nav-link").on("click",function(event){
        event.preventDefault();
        event.stopPropagation();
    });

    $("#logoNavMenu").hover(
        function(){
            $(this).css({ 'color': '#dda120', 'font-size': '98%', 'cursor': 'pointer' });
        },
        function(){
            $(this).css({ 'color': 'white', 'font-size': '100%' });
        }
    ).on("click",function(){
        if(window.location.pathname.indexOf("index") < 0){
            window.location.replace("/index.html");
        }
        
    });

    $("#btn_search").click(function(){
        console.log("Buscando...");
    });

    $("#btn_search").hover(function(){
        $(this).css({'color': '#808080', 'cursor': 'pointer'})
    },function(){
        $(this).css('color', '#ffffff')
    });
   
})
