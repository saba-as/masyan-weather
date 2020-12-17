

let search;


$("#search").click( () =>{

    search = $("#city").val().toString();

    getData(search)
}

   
)





function getData(search){

    $.ajax({
        url: 'http://api.weatherstack.com/current',
        data: {
          access_key: 'fd455105879e5b646cb86f08bb9a7254',
          query: search,
       
        },
        dataType: 'json',
        success: function(apiResponse) {
            

            try{
                setData(apiResponse)

            }catch(ex){
                $("#title").text('Please enter valid city')


            }
        
          
        },
       
      });
}


function setData(data){

    $("#title").text(data.location.country + ', ' + data.location.region)
    $("#temp").text(data.current.temperature + '°C')
    $("#wind_speed").text('wind speed ' + data.current.wind_speed + '    |    ')
    $("#wind_degree").text('wind degree ' + data.current.wind_degree + '°' + '    |    '     )
    $("#humidity").text('humidity ' + data.current.humidity + '%' )





}