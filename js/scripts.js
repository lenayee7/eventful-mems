$(function() {

    /* Home page carousel */
    $(".carousel").carousel( {interval: 5000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    /* Open Login Modal */
    $('#loginButton').click(function() {
        $('#loginModal').modal("show");
    });

    /* Open Create Event Modal */
    $('#createEventButton').click(function() {
        $('#eventModal').modal('show');
    })

    /* Upcoming/Past */
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });

    $( '#topheader .navbar-nav a' ).click(function () {
        // e.preventDefault();
        $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });

    // const element = document.getElementById('datePicker')
    // const picker = pickadate.create()
    // pickadate.render(element, picker)
});



    