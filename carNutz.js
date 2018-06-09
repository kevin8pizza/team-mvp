

$("#btn").on("click", function() {
    // store input into const x3
    const year = $("#year").value().trim();
    const make = $("#make").text().trim();
    const model = $("#model").text().trim();
    console.log("Year = " + year);
    console.log("Make = " + make);
    console.log("Model = " + model);


    // AJAX call for API 1


});

    $(document).ready(function () {

        $.ajax({
            type: 'GET',
            url: 'https://coolguruji-youtube-to-mp3-download-v1.p.mashape.com/?id={make, model, year}',

            dataType: "json",

            crossDomain: true,
            success: function (msg) {

                alert("success");

            },
            error: function (request, status, error) {

                alert(error);
            }
        });
    });

 // AJAX call for API 2
 
     $(document).ready(function () {

$.ajax({
    type: 'GET',
    url: 'https://twinesocial.p.mashape.com/v1/content',

    dataType: "json",

    crossDomain: true,
    success: function (msg) {

        alert("success");

    },
    error: function (request, status, error) {

        alert(error);
    }
});
});
 
      