var count = 0;

$('button').click(function(){
    count ++; 
    $.ajax({
        url: `https://swapi.dev/api/people/${count}`,
        success: function(res){
            $('h4').text(res.name)
        }
    })
})
