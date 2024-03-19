$(document).on('click', 'ul li a', function(){
    // Remove 'active' class from all links
    $('ul li a').removeClass('active');

    // Add 'active' class to the clicked link
    $(this).addClass('active');
});