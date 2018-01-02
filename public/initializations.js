var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem, {});

// // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// // var collapsibleElem = document.querySelector('.collapsible');
// // var collapsibleInstance = new M.Collapsible(collapsibleElem, options);

// // Or with jQuery

$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
});



// Modal javaScript

        $(document).ready(function() {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
        });
        
        
        
//   var instance = M.Carousel.init({
//     fullWidth: true,
//     indicators: true
//   });

  // Or with jQuery

//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });