Review = {

initHandlers: function(){
  $('.review-nav li a').click(function(){
    $('.container').hide();
    $('.review-nav li.active').removeClass('active');
    var targetDiv = $(this).attr('data-target');
    $(this).closest('li').addClass('active');
    $('#'+targetDiv).show();
  });

  $('.pagination li a.page_num').click(function(){
    $('.review-data').hide();
    $('.pagination .active').removeClass('active');
    var targetDiv = $(this).attr('data-target');
    $('#'+targetDiv).show();
    $('a[data-target='+targetDiv+']').addClass('active');
  });

  $('.pagination li.page_nav a').click(function(){
    var targetSibling = $('.pagination .active').attr('data-target');
    if($(this).attr('aria-label') == 'Next'){
        var element = $('.pagination .active').closest('li').next();
        $(element).find('a').click();
    }else{
        var element = $('.pagination .active').closest('li').prev();
        $(element).find('a').click();
    }
  });


},
init: function(){
  Review.initHandlers();
}

}

Review.init();
