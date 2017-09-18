$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/hydra1isk.json',
    dataType: 'jsonp',
    success: function(response) {
        let badgeLength = response.courses.completed.length;
        console.log(response.courses.completed);
        for(let i = 0; i < badgeLength; i++){
            $('#badges').append('<div class="course"><h3>' + response.courses.completed[i].title + '</h3><img src="' + response.courses.completed[i].badge + '"/><a href="' + response.courses.completed[i].url + '" class="btn btn-primary" target="_blank">See Course</a></div>');
        }
    }
  });

});
