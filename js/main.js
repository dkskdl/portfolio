
//경험 탭메뉴 

$(function(){
    $(".tab-data").hide();
    $(".tab-data:first").show();

    $("ul.tabs li").click(function(){
        $("ul.tabs li").removeClass("current")
        $(this).addClass("current")
   
        $(".tab-data").hide()
        var currentTab = $(this).attr("data-tab");
        $("#" + currentTab).fadeIn();
    })
})

$(function(){
  $(".project-data").hide();
  $(".project-data:first").show();

  $("ul.project-tabs li").click(function(){
    $("ul.project-tabs li").removeClass("current-1")
    $(this).addClass("current-1")

    $(".project-data").hide()
    var currentTab1 = $(this).attr("data-tabs");
    $("#" + currentTab1).fadeIn();
  })
})




document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");
   function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
});




// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");
console.log(paginationItems);

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}



$(function(){

$("button").click(function(){
  $(".modal").fadeIn();
});

$(".modal_content").click(function(){
  $(".modal").fadeOut();
});

});


$(function(){

  $(".uiux_modal_1").click(function(){
    $(".modal_box1").fadeIn();
    });

    $(".modal_box1").click(function(){
    $(".modal_box1").fadeOut();
    });

  
    $(".uiux_modal_2").click(function(){
    $(".modal_box2").fadeIn();
    });

    $(".modal_box2").click(function(){
    $(".modal_box2").fadeOut();
    });	

    $(".uiux_modal_3").click(function(){
    $(".modal_box3").fadeIn();
    });

    $(".modal_box3").click(function(){
    $(".modal_box3").fadeOut();
    });	
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var procedureLink = document.querySelector(".procedure");
    var modalArtplay = document.querySelector(".modal-artplay");
    var iframe = document.createElement("iframe");
    iframe.src = "wewe.pdf";
    iframe.frameBorder = "0";
    iframe.scrolling = "no"; 
    modalArtplay.querySelector(".modal-content").appendChild(iframe);

    procedureLink.addEventListener("click", function(event) {
      event.preventDefault();
      modalArtplay.style.display = "flex";
    });

    modalArtplay.addEventListener("click", function(event) {
      if (event.target === modalArtplay) {
        modalArtplay.style.display = "none";
      }
    });
  });

  
  $(document).ready(function() {

    function openLightbox(imageSrc) {
        $('.lightboxImage').html('<img src="' + imageSrc + '">');
        $('#lightbox').fadeIn();
    }

    $('.grid-item-1').click(function() {
        openLightbox('image/img/item-1.png');
    });

    $('.grid-item-2').click(function() {
        openLightbox('image/img/modal-item-2.png');
    });

    $('.grid-item-3').click(function() {
      openLightbox('image/img/modal-item-3.jpg');
    });

    $('.grid-item-4').click(function() {
        openLightbox('image/img/modal-item-4.jpg');
    });

    $('.grid-item-5').click(function() {
      openLightbox('image/img/modal-item-7.png');
    });

    $('.grid-item-6').click(function() {
        openLightbox('image/img/modal-item-5.jpg');
    });

    $('.grid-item-7').click(function() {
      openLightbox('image/img/modal-item-6.png');
  });


    $('#lightbox').click(function() {
        $(this).fadeOut();
    });
});