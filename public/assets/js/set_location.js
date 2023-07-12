$(function() {
  let area = {};

  $('main.set-location select.sel-country').niceSelect();

  $(document).on('click', '.area a', function(e) {
    e.preventDefault();
    $('ul.area > li').removeClass('active');
    $(this).closest('li').addClass('active');
    const city = $(this).data('city');
    setTownInfo(city);
    area = {
      ...area,
      city
    }
  });

  $(document).on('click', '.area-detail a', function(e) {
    e.preventDefault();
    $('ul.area-detail > li').removeClass('active');
    $(this).closest('li').addClass('active');
    const town = $(this).data('town');
    area = {
      ...area,
      town
    }
  });

  $('main.set-location select.sel-country').change(function() {
    setCityInfo($('main.set-location select.sel-country option:selected').val());
  });

  // 현재 위치로 설정
  $('.btn-set-location').click(function() {
    console.log(area);
  });

  setCityInfo($('main.set-location select.sel-country option:selected').val());
});

const setTownInfo = city => {
  $('ul.area-detail').empty();
  const townInfo = {
    Metro_Manila: [
      { name: 'Manila', nameKr: '마닐라' },
      { name: 'Caloocan', nameKr: '칼루칸' },
      { name: 'Las Pinas', nameKr: '라스피냐스' }
    ],
    Luzon: [
      { name: 'Luzon1', nameKr: '루존지역1' },
      { name: 'Luzon2', nameKr: '루존지역2' },
      { name: 'Luzon3', nameKr: '루존지역3' },
    ],
    Visayas: [
      { name: 'Visayas1', nameKr: '비사야스1' },
      { name: 'Visayas2', nameKr: '비사야스2' },
      { name: 'Visayas3', nameKr: '비사야스3' },
    ],
    Mindanao: [
      { name: 'Mindanao1', nameKr: '민다나오1' },
      { name: 'Mindanao2', nameKr: '민다나오2' },
      { name: 'Mindanao3', nameKr: '민다나오3' },
    ]
  }

  const townDOM = townInfo[city].reduce((acc, v, i) => {
    acc += '<li>\n';
    acc += `<a href="#" data-town='${v.name}'>${v.nameKr}</a>\n`;
    acc += '</li>\n';
    return acc;
  }, '');
  
  $('ul.area-detail').append(townDOM);
  $('ul.area-detail').prepend('<li><a href="#" data-town="all">전체</a></li>');

  if (!$('ul.area-detail').hasClass('show')) {
    $('ul.area-detail').addClass('show');
  }
}

const setCityInfo = country => {
  $('ul.area').empty();
  const cityInfo = {
    philippines: [
      { name: 'Metro_Manila', nameKr: '메트로마닐라' },
      { name: 'Luzon', nameKr: '루존 지역' },
      { name: 'Visayas', nameKr: '비사야스 지역' },
      { name: 'Mindanao', nameKr: '민다나오 지역' }
    ],
    korea: [
      { name: 'Metro_Manila', nameKr: '메트로마닐라' },
      { name: 'Luzon', nameKr: '루존 지역' },
      { name: 'Visayas', nameKr: '비사야스 지역' },
      { name: 'Mindanao', nameKr: '민다나오 지역' }
    ]
  }

  const cityDOM = cityInfo[country].reduce((acc, v, i) => {
    acc += '<li>\n';
    acc += `<a href="#" data-city='${v.name}'>${v.nameKr}</a>\n`;
    acc += '</li>\n';
    return acc;
  }, '');
  $('ul.area').append(cityDOM);

  if (!$('ul.area').hasClass('show')) {
    $('ul.area').addClass('show');
  }
}