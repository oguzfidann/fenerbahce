let logo = document.querySelector(".logo img");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let p1 = document.querySelector(".p1");
let fVideo = document.querySelector(".big-img iframe");

btn1.onclick = function () {
  p1.innerHTML = "2018/19 Season <br> All Goals";
  fVideo.src = "https:/www.youtube.com/embed/x4TRgSkjZq8?autoplay=1&mute=1";
};

btn2.onclick = function () {
  p1.innerHTML = "2019/20 Season <br> All Goals";
  fVideo.src = "";
};

btn3.onclick = function () {
  p1.innerHTML = "2020/21 Season <br> All Goals";
  fVideo.src = "https:/www.youtube.com/embed/E0vhsJoolYU?autoplay=1&mute=1";
};

logo.onclick = function () {
  p1.innerHTML = "Geleceğimiz için <br> #FENEROL";
  fVideo.src = "https:/www.youtube.com/embed/Nye_cgyD1yg?autoplay=1&mute=1";
};

/*
function Season(anything) {
    document.querySelector(".fVideo").src = anything;
}


function changeText(text) {
    let p1 = document.querySelector('.p1');
    p1.innerHTML = text;  
}

*/
