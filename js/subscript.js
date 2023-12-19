/* 검색 창 - 스크립트
---------------------------------------------------------------- */

$(function() {
    $('#gnb li.last .search-icon').click(function() { // search-icon 클릭시
      var searchBar = $(this).closest('.last').find('.Search'); // last의 부모요소를 선택하고 자식요소인 Search클래스를 찾아 searchBar 변수 할당
      searchBar.slideToggle('fast'); 
    });
  });

/* 네비게이션 스크립트
---------------------------------------------------------------- */


$(function(){
    $('#slide-open').click(function(){
	    if($("#gnb").css("display") == "none"){
            $('#gnb').show();
    	} else {
        $('#gnb').hide();
      }
    });
});
$(function() {
  $("#slide-open").click(function() {
    $("#burgur").toggleClass('on');
    $("#gnb").toggleClass('on');
  });
});


/* 접고 펼치기 스크립트
---------------------------------------------------------------- */

function openCloseToc() { // 
  var regions = document.getElementsByClassName('region'); //변수선언
  if (regions.length > 0) { // 클래스가 존재하는지 확인하기 위해서 씀
    var region = regions[0]; //클래스가 잇을경우 변수선언
    if (region.style.display === 'block') { //display값이 block이면 
      region.style.display = 'none'; // none으로 설정
    } else {
      region.style.display = 'block'; //block이 아닐경우 block으로 설정
    }
  }
}