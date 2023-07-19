import React from 'react';

const SetTime = () => {
  return (
    <div id="biz-popup">
        <div className="h-80">
            <h3 class='f-noto'>
              영업 시간 설정
              <button class='btn-close-popup'></button>
            </h3>
            <div class='contents biz-time'>
                <div class='clearfix'>
                  <span>영업 시작시간</span>
                  <select class='right'>
                    <option value=''>08:00</option>
                    <option value=''>09:00</option>
                    <option value='' selected>10:00</option>
                    <option value=''>11:00</option>
                    <option value=''>12:00</option>
                  </select>
                </div>
                <div class='clearfix'>
                  <span>영업 종료시간</span>
                  <select class='right'>
                    <option value=''>19:00</option>
                    <option value='' selected>20:00</option>
                    <option value=''>21:00</option>
                    <option value=''>22:00</option>
                    <option value=''>23:00</option>
                    <option value=''>24:00</option>
                  </select>
                </div>
                <button type='primary' class='btn-save'>등록</button>
            </div>
          {/* <h3 className="f-noto">
            <button className="btn-close-popup"></button>
          </h3> */}

          {/* <div className="contents"> */}
              {/* <div id='biz-popup' className='sale'>
                <div>
                  <h3 class='f-noto'>
                    영업 시간 설정
                    <button class='btn-close-popup'></button>
                  </h3>
                  <div class='contents biz-time'>
                      <div class='clearfix'>
                        <span>영업 시작시간</span>
                        <select class='right'>
                          <option value=''>08:00</option>
                          <option value=''>09:00</option>
                          <option value='' selected>10:00</option>
                          <option value=''>11:00</option>
                          <option value=''>12:00</option>
                        </select>
                      </div>
                      <div class='clearfix'>
                        <span>영업 종료시간</span>
                        <select class='right'>
                          <option value=''>19:00</option>
                          <option value='' selected>20:00</option>
                          <option value=''>21:00</option>
                          <option value=''>22:00</option>
                          <option value=''>23:00</option>
                          <option value=''>24:00</option>
                        </select>
                      </div>
                      <button type='primary' class='btn-save'>등록</button>
                  </div>
                </div>
              </div> */}
              <footer id='footer' className="footer">
                  <a href='/' class='home'>
                      <figure>
                          <img src='../../assets/img/icon_home_01.svg'/>
                          <span>홈</span>
                      </figure>
                  </a>
                  <a href='!#' class='reservation'>
                      <figure>
                          <img src='../../assets/img/icon_reservation_01.svg'/>
                          <span>예약</span>
                      </figure>
                  </a>
                  <a href='!#' class='my-loc'>
                      <figure>
                          <img src='../../assets/img/icon_my_loc_01.svg'/>
                          <span>내위치</span>
                      </figure>
                  </a>
                  <a href='!#' class='chat'>
                      <figure>
                          <img src='../../assets/img/icon_chat_01.svg'/>
                          <span>채팅</span>
                      </figure>
                  </a>
                  <a href='!#' class='my-page'>
                      <figure>
                          <img src='../../assets/img/icon_my_page_01.svg' />
                          <span>마이페이지</span>
                      </figure>
                  </a>
              </footer>
          {/* </div> */}
        </div>
    </div>
  );
};

export default SetTime;


