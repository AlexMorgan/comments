
function User(fullname, title) {
  this.name = fullname ? fullname : 'User';
  this.title = "Job Applicant";
  this.id = 4;
  this.img = "/images/user-img-4.png";
}

function Comment(desc) {
  this.desc = desc ? desc : "Empty";

  Comment.prototype.getDate = function () {
      var d = new Date(),
      dateString = '';

      d = String(d);
      d = d.split(' ');

      for (var i = 0; i < 3;  i++) {
        dateString += d[i] + ' ';
      }

      return dateString;
    }
}

$('document').ready(function(){
  $('#comment-form').submit(function(e) {
    var userInput = $('#comment-input').val()
    var c = new Comment(userInput);
    e.preventDefault();
  });
});
