/*Start Navbar Script*/
var portfolio = $('#prt');
var about = $('#abt');
var skills = $('#sks');
var resume = $('#rsm');
var contact = $('#cntct');

portfolio.click(function(){
    $('html,body').animate({ scrollTop : 708}, -150);
    portfolio.addClass('active');
});

about.click(function(){
    $('html, body').animate({scrollTop: 1378}, -150);
    about.addClass('active');
});

skills.click(function(){
    $('html, body').animate({scrollTop: 2225}, -150);
    skills.addClass('active');
});

resume.click(function(){
    $('html, body').animate({scrollTop: 3065}, -150);
    resume.addClass('active');
});

contact.click(function(){
    $('html, body').animate({scrollTop: 3500}, -150);
    contact.addClass('active');
});
/*End Navbar Script*/

/*Start loadingPage script*/
$(window).on('load', function(){
    $('body').css('overflow', 'auto');
    $('.loading-container').css('display', 'none');
});
/*End loadingPage script*/
