$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/lucasbritz.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {
    let badges = $('#badges');

    courses.forEach(function(course) {
      let $course = $('<div />', {
        'class': 'course'
      }).appendTo(badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);
    });
  }

  $.each(response.courses.completed, function(index, course) {
    $('#badges').html('<div class="course">');
    $('#badges').find('.course').html('<h3>' + course.title + '</h3>');
    $('#badges').find('.course').html('<img src="' + course.badge + '" />');
    $('#badges').find('.course').html('<a href="' + course.url
      + '" target="_blank" class="btn btn-primary">See Course</a></div>');
  });
});
