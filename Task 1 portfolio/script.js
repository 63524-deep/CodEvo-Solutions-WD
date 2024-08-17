var typed = new Typed('#text', {
    strings: ["Frontend Developer","Python Developer" ,"C/C++ Developer"],
    typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
  });

function showSubmittedMessage(event) {
  event.preventDefault(); // Prevent the default form submission
  alert('  Your Form Submitted');
}

window.onload = function() {
  const submitButton = document.querySelector('.send');
  submitButton.addEventListener('click', showSubmittedMessage);
};