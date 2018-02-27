// My code

//Hide the newLink Input
$("#newLinkFormGroup").hide();

// Show the list of session 
allStorage();

var urlArrayList = [];

$(function () {  
    $("#submitBtn").click(function () {

        var urlObject = {};
        urlObject.shortid = shortid();
        urlObject.href = $("#link").val();

        // Save data in local Database
        $.ajax({
            type: "POST",
            url: "/Home/Create",
            data: '{urlObject: ' + JSON.stringify(urlObject) + '}',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                // Show the new link for the user
                $("#newLink").html('<a class="result" href="'
                    + data.urlObject.href + '">'
                    + 'http://localhost:3544/' + data.urlObject.shortid + '</a>'); 


                // Show the formgroup of #newLinkFormGroup
                $("#newLinkFormGroup").show();

                // Update to the link
                $("#sessionObj").append('<li>' + '<a class="result" href="'
                    + data.urlObject.href + '">'
                    + 'http://localhost:3544/' + data.urlObject.shortid + '</a>'
                    + '</li>'); 

                 
                console.log("Data has been added successfully.");

                var urlObj = { href: data.urlObject.href, shortid: data.urlObject.shortid }

                // Put in array
                urlArrayList.push(urlObj);

                // Add to SessionStorage                
                sessionStorage.setItem("urlArrayList", JSON.stringify(urlArrayList))

            },
            error: function (){
                alert("Error while inserting data");
            }
        }); 
        return false;
    });

});
 

// Create a random string with max 6 letters
function shortid() {
    // an empty string
    var randomString = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // loop trough the string of "possible" and make a random string of 6 letters.
    for (var i = 0; i < 6; i++) 
    // loops through the string and take a random number 
    randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log("here in shortid function");
    console.log("The new url shortner is " + randomString);

    return randomString;
};

// Show all
function allStorage() {
    
    for (var i = 0; i < sessionStorage.length; i++) {
        key = sessionStorage.key(i);
        var urlObj = JSON.parse(sessionStorage.getItem(key));

        for (var a = 0; a < urlObj.length; a++) {
            if (a === 10) {
                console.log("Only show 10 url")
                break;
            }
            else {
                $("#sessionObj").append('<li>' + '<a class="result" href="'
                    + urlObj[a].href + '">'
                    + 'http://localhost:3544/' + urlObj[a].shortid + '</a>'
                    + '</li>');
            }

        }
    }


    

}

 


    