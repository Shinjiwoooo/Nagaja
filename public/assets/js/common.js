$(function() {
  // Header, Footer, Location DOM에 따른 동적 padding 설정
  setBodyPadding();

  $('#header .btn-close').click(function() {
    // 닫기 버튼 터치 시 로직
  });

  $('select').change(function(e) {
    if (e.target.value) {
      $(this).addClass('has-value');
    }
  });

  // 메인 배너 탭
  $(document).on('click', 'main.main [data-action]', function() {
    const action = $(this).data('action');
    console.log(action);
  });
  
  // 휴대폰 인증 - 휴대폰 번호 입력 폼
  $('input.input-phone').on('change keyup paste', function() {
    changeStrToNum($(this));
    
    if (checkIsValid(Validator.PHONE, $(this).val())) {
      if ($('.send-cert-num').hasClass('disabled')) {
        $('.send-cert-num').removeClass('disabled');
      }
    } else {
      if (!$('.send-cert-num').hasClass('disabled')) {
        $('.send-cert-num').addClass('disabled');
      }
    }
  });

  // 휴대폰 인증 - 인증 번호 입력 폼
  $('input.input-cert-num').on('change keyup paste', function() {
    changeStrToNum($(this));

    if ($(this).val().length === 6) {
      $('.check-cert-num').removeClass('disabled');
    } else {
      $('.check-cert-num').addClass('disabled');
    }
  });

  // 휴대폰 인증 - 인증번호 발송 버튼
  $('.send-cert-num').click(function() {
    if (!checkIsActive($(this))) {
      return;
    }

    // 인증번호 발송 로직
  });

  // 휴대폰 인증 - 인증번호 확인 버튼
  $('.check-cert-num').click(function() {
    if (!checkIsActive($(this))) {
      return;
    }

    // 인증번호 확인 로직
  });

  // 게시물 내 신고 버튼
  $('.btn-report').click(function(e) {
    e.preventDefault();
    console.log('신고 버튼');
  });

  // 댓글 삭제 버튼
  $(document).on('click', 'ul.comment-list > li.my > button.btn-del-comment', function() {
    console.log('댓글 삭제');
  });

  // 첨부 이미지 삭제 버튼
  $(document).on('click', 'div.attach-image > ul > li > button.btn-del', function() {
    console.log('이미지 삭제');
  });
  
  // 신고 버튼
  $('button.btn-send-report').click(function() {
    console.log('신고하기 버튼');
  });

  // 대화창 추가 버튼
  $('main.chat-detail > div.chat-form > div > button.btn-add').click(function() {
    $('main.chat-detail > ul.container').toggleClass('expand');
  });

  // 회원가입 페이지로 이동
  $('.btn-close.move-to-signup').click(function() {
    location.replace('/page/member/signup_01.html');
  });

  // 인증 메일 재발송
  $('.btn-resend-cert-mail').click(function() {
    // 인증 메일 발송 로직
  });

  // 대화방 즐겨찾기 버튼
  $('.btn-toggle-favorite').click(function() {
    console.log('즐겨찾기 등록/해제');
  });

  // 대화방 방제목 변경 버튼
  $('.btn-edit-room-name').click(function() {
    console.log('방 제목 변경');
  });

  // 현재 위치로 설정 버튼
  $('.btn-set-curr-loc').click(function() {
    console.log('현재 위치로 설정');
  });

  // 주소 검색 결과 리스트에서 주소 탭
  $(document).on('click', 'ul.address-list > li > p.address-detail', function() {
    console.log('주소 탭');
  });

  // 환율 계산 버튼
  $('.btn-calculator').click(function() {
    console.log('환율 계산');
  });

  // TAIL 사업자 정보 버튼
  $('.btn-toggle-tail-info').click(function() {
    const target = 'div.common-tail > div.info';
    if ($(target).hasClass('show')) {
      $(target).slideUp(300);
    } else {
      $(target).slideDown(300);
    }
    $(this).toggleClass('show');
    $(target).toggleClass('show');
  });

  // TOP 버튼
  $('.btn-move-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // COMMON TAB
  $('.common-tab > li > a').click(function(e) {
    e.preventDefault();
    $('.common-tab > li').removeClass('active');
    $(this).closest('li').addClass('active');
  });

  // Slide Navigator
  $('.slide-nav > ul > li > button').click(function() {
    $('.slide-nav > ul > li > button').removeClass('active');
    $(this).addClass('active');
  });

  $('.slide-nav > button.type-to-end').click(function() {
    const x = $('.slide-nav > ul > li:last-child').offset().left;
    $('.slide-nav > ul').animate({ scrollLeft: x }, 750);
  });
});

const Validator = {
  PHONE: 'phone',
  EMAIL: 'email'
}

const checkIsValid = (type, value) => {
  Object.freeze(Validator);

  let regEx;
  if (type === Validator.PHONE) {
    regEx = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  } else { // EMAIL
    regEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  }

  return regEx.test(value);
}

const checkIsActive = selector => !$(selector).hasClass('disabled');

const changeStrToNum = selector => $(selector).val($(selector).val().replace(/[^0-9]/g, ''));

const setBodyPadding = () => {
  ['location', 'header', 'footer'].forEach(v => {
    if ($(`#${v}`).length) {
      $('body').addClass(`has-${v}`);
    } else {
      $('body').removeClass(`has-${v}`);
    }
  });
}

const setSwiper = (
    targetEl, 
    paginationEl, 
    type = 'bullets', 
    clickable = true, 
    effect = 'slide',
    autoplay = true
  ) => {
  new Swiper(targetEl, {
    autoplay: {
      enabled: autoplay,
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 750,
    loop: true,
    effect,
    pagination: {
      el: '.pagination-' + paginationEl,
      type,
      clickable,
    }
  });
}