$(function() {
  
});

const setNiceSelect = (placeholder = true) => {
  $('select').niceSelect();
  if (placeholder) {
    $('.nice-select > .current').addClass('placeholder');
  
    $('select').change(function() {
      $('.nice-select > .current').removeClass('placeholder');
    });
  }
}

const setSwipeEvent = (selector) => {
  $(selector).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      const target = $(this).prop('tagName').toLowerCase() === 'li' ? $(this) : $(this).closest('li');
      if (direction === 'left') {
        if (!target.hasClass('swiped')) {
          target.addClass('swiped');
        }
      } else {
        if (target.hasClass('swiped')) {
          target.removeClass('swiped');
        }
      }
    }
  });
}