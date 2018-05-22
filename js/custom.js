
// slideshow: w3 schools
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

// sign up: my own jquery

  $(document).ready(function(){

    $("#newslettersignup").click(function(){
        $("#signup").show();
    });

    $("button").click(function(){
        $("#signup").hide();
    });

  });

  // events bar my own jquery

  $(document).ready(function(){

    $("#eventbar1 img").click(function(){
        $("#eventbar1 > p").toggle();
    });

    $("#eventbar2 img").click(function(){
        $("#eventbar2 > p").toggle();
    });

    $("#eventbar3 img").click(function(){
        $("#eventbar3 > p").toggle();
    });

    $("#eventbar4 img").click(function(){
        $("#eventbar4 > p").toggle();
    });

  });
