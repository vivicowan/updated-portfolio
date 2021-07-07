// Navigating to github repository and deployed webpage for weather dashboard.
$("#wd-repo-btn").on('click', function() {
	location.href = "https://github.com/vivicowan/weather-dashboard";
});

$("#wd-web-btn").on('click', function() {
	location.href = "https://vivicowan.github.io/weather-dashboard/";
});


// Navigating to github repository and deployed webpage for workday scheduler.
$("#ws-repo-btn").on('click', function() {
	location.href = "https://github.com/vivicowan/workday-scheduler";
});

$("#ws-web-btn").on('click', function() {
	location.href = "https://vivicowan.github.io/workday-scheduler/";
});


// Navigating to github repository and deployed webpage for crypto launch.
$("#cl-repo-btn").on('click', function() {
	location.href = "https://github.com/m-car/crypto-launchpad";
});

$("#cl-web-btn").on('click', function() {
	location.href = "https://m-car.github.io/crypto-launchpad/";
});


// Navigating to github repository and deployed webpage for coding quiz.
$("#cq-repo-btn").on('click', function() {
	location.href = "https://github.com/vivicowan/coding-quiz";
});

$("#cq-web-btn").on('click', function() {
	location.href = "https://vivicowan.github.io/coding-quiz/";
});


(function () {
	'use strict'
 
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
 
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		 form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
			  event.preventDefault()
			  event.stopPropagation()
			}
 
			form.classList.add('was-validated')
		 }, false)
	  })
 })()


 $(".fa-github").on('click', function() {
	location.href = "https://github.com/vivicowan";
});

$(".fa-linkedin").on('click', function() {
	location.href = "https://www.linkedin.com/in/vivianna-cowan-400b061a6/";
});

$(".fa-instagram").on('click', function() {
	location.href = "https://www.instagram.com/vivicowan/?hl=en";
});
