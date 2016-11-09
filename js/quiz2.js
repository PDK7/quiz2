// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
  $('.links li a').on('click', function(e) {
    e.preventDefault()
      alert('you clicked a link, good for you');
  });

  console.log("this is a message for you!!!")
})(jQuery);

function alter_li() {
  var lis = $('ol > li');
  lis.css("color", "red");

  for (var i = 0; i < lis.length; i++) {
    var li = lis.get(i);
    li.innerHTML = "Hey there! We are list item #" + (i + 1);    
  }
}

function change_body() {
  $('body').get(0).innerHTML = "This is the end of the world ...";
}

//Click an element in the list to switch it to the other list!
function list_switcharoo() {
  if ($(this).parent().is('ul')) {
    $(this).remove();
    $(this).appendTo($('ol'));
  }
  else {
    $(this).remove();
    $(this).appendTo($('ul'));
  }
  $(this).click(list_switcharoo);
  $(this).get(0).innerHTML += " Stahp!";

}

$(document).ready(function(e) {
  alter_li();

  $('#danger').on('click', function(e) {
    $('#fadeAway').fadeOut(2000, function(e) {$('#fadeIn').fadeIn(1000)});
  });

  $('li').on('click', list_switcharoo);

  $('.accordion-label').click(function(e) {
    if($('.accordion-panel > p').css('opacity') === '0') {
      $(this).css('opacity', '.8');
      $('.accordion-panel > p').fadeTo(500, 1);
      $('.accordion-panel').show(500);
    } else {
      $(this).css('opacity', '1'); 
      $('.accordion-panel > p').fadeTo(50, 0, function(e) {$('.accordion-panel').hide(500);});
    }
  });
});
