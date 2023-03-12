$(".navbar-toggler-icon").click(function () {
    $(".navbar .list").slideToggle();
})

var num = 0;
for (let i = 0; i < $(".ud-faq-btn").length; i++) {
    $(".ud-faq-btn").eq(i).click(function () {
        console.log(i);
        num++
        if (num % 2 !== 0) {
            $(".bi-chevron-down").eq(i).css("transform","rotateX(180deg)")
        }else{
            $(".bi-chevron-down").eq(i).css("transform","rotateX(0deg)")
            num = 0
        }
        $(".ud-faq-body").eq(i).slideToggle();
    }) 
}

$(window).scroll(function () {
    if(parseInt($(document).scrollTop()) > 74){
        $(".header").css("background-color","rgba(255, 255, 255, 0.8)")
        $(".nav-link").css("color", "#000");
        $(".header .navbar-brand img").attr("src", "./image/logo-2.svg");
        $(".login-btn").css("color", "#000");
        $(".white-btn").css("background-color", "#3056d3");
    }else{
        $(".header").css("background-color","#3056d3")
        $(".nav-item a.nav-link").css("color", "#fff");
        $(".dropdown-menu .dropdown-item").attr("color", "#000");
        $(".header .navbar-brand img").attr("src", "./image/logo.svg");
        $(".login-btn").css("color", "#fff");
        $(".white-btn").css("background-color", "rgba(255, 255, 255, 0.2)");
    }
})
