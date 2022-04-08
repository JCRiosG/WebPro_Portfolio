
function showView(view){
    $.ajax({
        data: {},
        url:"http://jrios-lap/myportfolio/app/vistas/"+view+"/"+view+".php",
        type:"POST",
        dataType: 'html'
    }).done(function(data){
        $("#pageView").html(data);
    });
}

$("#portfolio").on("click",function(){
    showView('portfolio');
});

$("#experience").on("click",function(){
    showView('experience');
});

$("#skillset").on("click",function(){
    showView('skillset');
});

$("#contact").on("click",function(){
    showView('contact');
});



