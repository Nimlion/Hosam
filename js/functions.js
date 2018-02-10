// Scroll to Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1000) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    $("#topBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#CoverBg").offset().top
        }, 1500);
    });
}

/// Mobiele Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("topBtn").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("topBtn").style.display = "block";
}

/// Breedte van de balken
$(function() {
  $(".flex-container .flex-item .balk #bar #fill").each( function( key, bar ) {
    var percentage = $(this).attr('title');
    
    $(this).width(percentage);
  });
});

$(document).ready(function (){
    $("#nav1").click(function (){$('html, body').animate({scrollTop: $("#CoverBg").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#nav2").click(function (){$('html, body').animate({scrollTop: $("#Mezelf").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#nav3").click(function (){$('html, body').animate({scrollTop: $("#Vakantie").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#nav4").click(function (){$('html, body').animate({scrollTop: $("#Gallerij").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#nav5").click(function (){$('html, body').animate({scrollTop: $("#Skills").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#nav6").click(function (){$('html, body').animate({scrollTop: $("#Contact").offset().top}, 1500);});
});

$(document).ready(function (){
    $("#down-arrow").click(function (){$('html, body').animate({scrollTop: $("#Mezelf").offset().top}, 1500);});
});



//// Check of pagina is geladen.
$(document).ready(function(){
//        alert('hallo ik ben nu klaar');
});