$(function() {
  $('section.latest.blog > ul.order > li > a').click(function(e) {
    e.preventDefault();
    $('section.latest.blog > ul.order > li > a').removeClass('active');
    $(this).addClass('active');
  });

  $('.container-board-btns > button.btn-delete').click(function() {
    $('body').css('overflow', 'hidden');
    $('.slide-popup.delete').addClass('show');
  });

  $('.container-board-btns > button.btn-edit').click(function() {
    // 수정
  });

  $('.container-board-btns > button.btn-to-list').click(function() {
    // 목록으로
  });

  $('.container-board-btns > button.btn-cancel').click(function() {
    // 취소
  });

  $('.container-board-btns > button.btn-submit').click(function() {
    // 등록
  });

  // 파일첨부
  $('#wr-attach-file').change(function() {
    const fileName = $('#wr-attach-file').val();
    if (!fileName) {
      return;
    }
    $('.file-name').val(fileName.substring(fileName.lastIndexOf('\\') + 1));
  });

  $('.slide-popup .btn-cancel').click(function() {
    $('.slide-popup').removeClass('show');
    $('body').css('overflow', 'auto');
  });

  $(document).on('click', '.btn-user-action', function() {
    switch ($(this).data('action')) {
      case 'comment':
        // 댓글 쓰기
        break;

      case 'add-fav':
        // 즐겨찾기 추가
        break;

      case 'report':
        // 신고하기
        break;

      default: // like
        // 좋아요
        break;
    }
  });
});