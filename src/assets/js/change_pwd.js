$(function() {
  $('button[type=submit]').click(function(e) {
    e.preventDefault();

    const userPwd = $('[name=user_pwd]').val();
    if (!userPwd) {
      setWarning('pwd', '비밀번호를');
      return;
    }
    if (!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(userPwd)) {
      setWarning('pwd', '비밀번호는 8~15자의 영어 대소문자, 숫자, 특수문자 조합으로 입력해 주세요.', false);
      return;
    }
    $('.guide-warn.pwd').removeClass('show');

    if ($('[name=user_pwd]').val() !== $('[name=user_pwd_check]').val()) {
      setWarning('pwd-check', '비밀번호가 일치하지 않습니다. 다시 한번 확인해 주세요.', false);
      return;
    }
    $('.guide-warn.pwd-check').removeClass('show');
    // Request to Server
  });
});

const setWarning = (el, msg, isDef = true) => {
  $(`.guide-warn.${el}`).text(isDef ? msg + ' 입력해 주세요.' : msg);
  $(`.guide-warn.${el}`).addClass('show');
}