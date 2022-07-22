$(document).ready(function(){
    $(".signin,.sign-buttons").on("click",function () {
        $("#log-form").show(400);
    });
    $(".register").on("click",function () {
        $("#log-form").show(400);
    });
    $(".close").on("click",function (){
        // console.log("this is clicked");
        $("#log-form").hide();
    });
});
// For prevent default and hide password on eye icon click in form
const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})