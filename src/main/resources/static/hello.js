$(document).ready(function () {
    getCourse("eur")
    getCourse("usd")

    function getCourse(name){

        $.ajax({
            url: "http://localhost:8080/exchangerates/"+name+"/today"
        }).then(function (data) {
            $("."+name+'-bid').append(data.rates[0].bid);
            $("."+name+'-ask').append(data.rates[0].ask);
        });
    }

    function getGold(){

        $.ajax({
            url: "http://localhost:8080/gold"
        }).then(function (data) {
            $('.cenyzlota').append(data.content);
        });
    }


});