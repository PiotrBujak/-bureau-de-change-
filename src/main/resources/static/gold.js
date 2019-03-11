$(document).ready(function () {
    getCourse("gold")

    function getCourse(name){

        $.ajax({
            url: "http://api.nbp.pl/api/cenyzlota/today?format=jason"
        }).then(function (data) {
            $("#gold").append(data[0].cena);
        });
    }
});