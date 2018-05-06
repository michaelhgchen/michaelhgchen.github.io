document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByTagName('body')[0].classList.add('has-js');

  setTimeout(function() {
    const content = document.getElementById('content');
    content.classList.add('fade-in');
    content.classList.remove('fade-out');
  }, 0);
});
