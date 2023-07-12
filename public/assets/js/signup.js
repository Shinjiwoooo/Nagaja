$(function() {
  let isCheckedPwd = false;
  $('.sel-country').niceSelect();
    
  $('#chk-all').click(function() {
    $('input[id^=chk-]').prop('checked', $(this).is(':checked'));
    setSubmitBtnState();
  });

  $('[id^=chk-]').click(function() {
    setSubmitBtnState();
  });

  $('button[type=submit]').click(function(e) {
    e.preventDefault();

    const userId = $('[name=user_id]').val();
    if (!userId) {
      setWarning('id', '아이디를');
      return;
    }
    if (!isValid('id', userId)) {
      setWarning('id', '아이디는 5~20자의 영문 소문자, 숫자 조합으로 입력해 주세요.', false);
      return;
    }
    $('.guide-warn.id').removeClass('show');

    const userPwd = $('[name=user_pwd]').val();
    if (!userPwd) {
      setWarning('pwd', '비밀번호를');
      return;
    }
    if (!isValid('pwd', userPwd)) {
      setWarning('pwd', '비밀번호는 8~15자의 영어 대소문자, 숫자, 특수문자 조합으로 입력해 주세요.', false);
      return;
    }
    $('.guide-warn.pwd').removeClass('show');

    if (!isValid('pwd-check', $('[name=user_pwd_check]').val())) {
      setWarning('pwd-check', '비밀번호가 일치하지 않습니다. 다시 한번 확인해 주세요.', false);
      return;
    }
    $('.guide-warn.pwd-check').removeClass('show');

    const userNickname = $('[name=user_nickname]').val();
    if (!userNickname) {
      setWarning('nickname', '닉네임을');
      return;
    }
    if (!isValid('nickname', userNickname)) {
      setWarning('nickname', '닉네임은 5~20자의 글자로 입력해 주세요.', false);
      return;
    }
    $('.guide-warn.nickname').removeClass('show');
    
    const userEmail = $('[name=user_email]').val();
    if (!userEmail) {
      setWarning('email', '이메일을');
      return;
    }
    if (!isValid('email', userEmail)) {
      setWarning('email', '올바른 이메일 형식으로 입력해 주세요.', false);
    }
    $('.guide-warn.email').removeClass('show');
    
    if (!$('.sel-country option:selected').val()) {
      alert('국가를 선택하세요.');
      return;
    }

    // Request to Server
  });
});

const setWarning = (el, msg, isDef = true) => {
  $(`.guide-warn.${el}`).text(isDef ? msg + ' 입력해 주세요.' : msg);
  $(`.guide-warn.${el}`).addClass('show');
}

const setSubmitBtnState = () => {
  const els = document.querySelectorAll('[id^=chk-][required]');
  const action = Array.from(els).every(v =>  v.checked) ? 'remove' : 'add';
  $('.btn-submit')[`${action}Class`]('disabled');
}

const isValid = (type, value) => {
  switch (type) {
    case 'id':
      return /^[a-z0-9]{5,20}$/.test(value);

    case 'pwd':
      return /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(value);

    case 'pwd-check':
      return $('[name=user_pwd]').val() === value;

    case 'nickname':
      return /^.{5,20}$/.test(value);

    case 'email':
      return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(value);

    default:
      throw new Error('# Unsupported type : ', type);
  }
}