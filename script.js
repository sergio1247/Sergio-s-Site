$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    
    });

    // toggle menu/navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty(‘ — app-height’, `${window.innerHeight}px`)
   }
   window.addEventListener(‘resize’, appHeight)
   appHeight()
