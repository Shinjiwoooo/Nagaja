$(function() {
  $('.sel-type').niceSelect();
  $('.btn-search').click(function() {
    console.log('클릭');
  });

  // 데이터 로드 후 불러오는 방식으로 변경
  setBestShop();
});

const setBestShop = () => {
  $('.best-shop-badge').remove();
  $('main.search ul.result > li > div').each(function(_, v) {
    if ($(v).hasClass('best-shop')) {
      const posX = $(v).offset().left - 10;
      const posY = $(v).offset().top - 8;
      const url = '../../assets/img/icon_best_01.svg';
      const style = `style='top:${posY}px;left:${posX}px;'`;
      const badge = `<img src='${url}' class='best-shop-badge' ${style}>`;
      $('body').append(badge);
    }
  });
}