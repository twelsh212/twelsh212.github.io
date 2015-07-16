$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(".hiddenEle").hide(0);
$(".afterCntDown").hide(0);
$(".shutdownTimer").click(function(e){
   // Function to update counters on all elements with class counter
   $(".hiddenEle").show(0);
   var doUpdate = function() {
      $('.target').each(function() {
         var count = parseInt($(this).html());
         if (count !== 0) {
            $(this).html(count - 1);
         }
         if (count === 0) {
            $(".afterCntDown").show(0);
         }
      });
   };
   setInterval(doUpdate, 1000);
});


  // Schedule the update to happen once every second


// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
