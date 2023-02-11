var botToTop = document.getElementById('botToTop');

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 175) {
        botToTop.style.display = "block";
    } else {
        botToTop.style.display = "none";
    }
}

function handleBotToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // 0,600,1000 là chiều rộng của màn hình
    responsive:{
        // Chiều rộng 0
        0:{
            items:1
        },
        // Chiều rộng 600
        600:{
            items:3
        },
        // Chiều rộng 1000
        1000:{
            items:5
        }
    }
})