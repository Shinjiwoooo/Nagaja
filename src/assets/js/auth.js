$(function() {
  $('button[type=submit]').click(function(e) {
    e.preventDefault();

    const userId = $('input[name=user_id]').val();
    const userPwd = $('input[name=user_pwd]').val();

    if (!userId || !userPwd) {
      $('.guide-warn').text('아이디와 비밀번호를 모두 입력해 주세요.');
      $('.guide-warn').addClass('show');
    } else {
      $('.guide-warn').removeClass('show');
      // Request to Server
    }
  });
});