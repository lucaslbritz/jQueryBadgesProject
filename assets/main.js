$(function() {

  // your code will go here

  $.ajax({
    url: 'https://www.codeschool.com/users/lucasbritz.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(index, course) {
        $('#badges').html('<div class="course">' + course + '</div>');
      });
    }
  });
});
