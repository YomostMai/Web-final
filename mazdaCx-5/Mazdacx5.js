var platIndex = 1;
function PlatinumShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "block";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "none";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "none";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "none";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "none";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "none";

    platSlides(platIndex);
}
function platPlus(n) {
    platSlides(platIndex += n);
}
function platSlides(n) {
    var i;
    var slides = document.querySelectorAll(".plat");

    if (n > slides.length) {
        platIndex = 1;
    }
    if (n < 1) {
        platIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[platIndex - 1].style.display = "block";
}
var redIndex = 1;
function RedShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "block";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "none";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "none";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "none";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "none";

    redSlides(redIndex);
}
function redPlus(n) {
    redSlides(redIndex += n);
}
function redSlides(n) {
    var i;
    var slides = document.querySelectorAll(".red");

    if (n > slides.length) {
        redIndex = 1;
    }
    if (n < 1) {
        redIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[redIndex - 1].style.display = "block";
}
var snowIndex = 1;
function SnowShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "none";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "block";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "none";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "none";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "none";

    snowSlides(snowIndex);
}
function snowPlus(n) {
    snowSlides(snowIndex += n);
}
function snowSlides(n) {
    var i;
    var slides = document.querySelectorAll(".snow");

    if (n > slides.length) {
        snowIndex = 1;
    }
    if (n < 1) {
        snowIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[snowIndex - 1].style.display = "block";
}
var grayIndex = 1;
function GrayShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "none";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "none";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "block";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "none";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "none";

    graySlides(grayIndex);
}
function grayPlus(n) {
    graySlides(grayIndex += n);
}
function graySlides(n) {
    var i;
    var slides = document.querySelectorAll(".gray");

    if (n > slides.length) {
        grayIndex = 1;
    }
    if (n < 1) {
        grayIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[grayIndex - 1].style.display = "block";
}
var blackIndex = 1;
function BlackShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "none";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "none";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "none";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "block";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "none";

    blackSlides(blackIndex);
}
function blackPlus(n) {
    blackSlides(blackIndex += n);
}
function blackSlides(n) {
    var i;
    var slides = document.querySelectorAll(".black");

    if (n > slides.length) {
        blackIndex = 1;
    }
    if (n < 1) {
        blackIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[blackIndex - 1].style.display = "block";
}
var blueIndex = 1;
function BlueShow() {
    var slideshowContainer = document.getElementById("chance-color-plat-container");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("chance-color-red-container");
    slideshowContainer2.style.display = "none";

    var slideshowContainer3 = document.getElementById("chance-color-snow-container");
    slideshowContainer3.style.display = "none";

    var slideshowContainer4 = document.getElementById("chance-color-gray-container");
    slideshowContainer4.style.display = "none";

    var slideshowContainer5 = document.getElementById("chance-color-black-container");
    slideshowContainer5.style.display = "none";

    var slideshowContainer6 = document.getElementById("chance-color-blue-container");
    slideshowContainer6.style.display = "block";

    blueSlides(blueIndex);
}
function bluePlus(n) {
    blueSlides(blueIndex += n);
}
function blueSlides(n) {
    var i;
    var slides = document.querySelectorAll(".blue");

    if (n > slides.length) {
        blueIndex = 1;
    }
    if (n < 1) {
        blueIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[blueIndex - 1].style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("kichthuocshow");
    var div = document.getElementById("kichthuoc");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("hopsoshow");
    var div = document.getElementById("hopso");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("khungshow");
    var div = document.getElementById("khung");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ngoaithatshow");
    var div = document.getElementById("ngoaithat");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("noithatshow");
    var div = document.getElementById("noithat");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("antoanshow");
    var div = document.getElementById("antoan");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("tieuthushow");
    var div = document.getElementById("tieuthu");
    button.addEventListener("click", function() {
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
  function ngoaithatshow() {
    var slideshowContainer = document.getElementById("carcollor");
    slideshowContainer.style.display = "block";

    var slideshowContainer2 = document.getElementById("carinside");
    slideshowContainer2.style.display = "none";
  }  
  function noithatshow() {
    var slideshowContainer = document.getElementById("carcollor");
    slideshowContainer.style.display = "none";

    var slideshowContainer2 = document.getElementById("carinside");
    slideshowContainer2.style.display = "block";
  }