// Navigating to github repository and deployed webpage for weather dashboard.
$("#wd-repo-btn").on("click", function () {
  location.href = "https://github.com/vivicowan/employee-tracker";
});

// Navigating to github repository and deployed webpage for workday scheduler.
$("#ws-repo-btn").on("click", function () {
  location.href = "https://github.com/vivicowan/team-profile-generator";
});

// Navigating to github repository and deployed webpage for crypto launch.
$("#cl-repo-btn").on("click", function () {
  location.href = "https://github.com/zzangu0215/zzangu-and-the-pals";
});

$("#cl-web-btn").on("click", function () {
  location.href = "https://myknl-zap.herokuapp.com/";
});

// Navigating to github repository and deployed webpage for coding quiz.
$("#cq-repo-btn").on("click", function () {
  location.href = "https://github.com/vivicowan/tech-blog";
});

$("#cq-web-btn").on("click", function () {
  location.href = "https://lit-wave-94013.herokuapp.com/";
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$(".fa-github").on("click", function () {
  location.href = "https://github.com/vivicowan";
});

$(".fa-linkedin").on("click", function () {
  location.href = "https://www.linkedin.com/in/vivianna-cowan-400b061a6/";
});

$(".fa-instagram").on("click", function () {
  location.href = "https://www.instagram.com/vivicowan/?hl=en";
});
