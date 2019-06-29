$("#labelMenuNav").addClass("d-none");

$(".nav-link").on("click",function(event){
    event.preventDefault();
    event.stopPropagation();
});

$("#logoNavMenu").hover(
    function(){
        $(this).css({ 'color': '#dda120', 'font-size': '98%' });
        $(this).css('cursor', 'pointer');
    },
    function(){
        $(this).css({ 'color': 'white', 'font-size': '100%' });
    }
).on("click",function(){
    if(window.location.pathname.indexOf("index") < 0){
        window.location.replace("/index.html");
    }
    
});
