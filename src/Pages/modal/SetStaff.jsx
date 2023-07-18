import React from 'react';

const SetStaff = () => {
  return (
    <div id="biz-popup">
          <div className="h-80">
            <h3 className='f-noto'>
              인원 설정
              <button className='btn-close-popup'></button>
            </h3>
            <div className='contents'>
              <div className='item'>
                <p>
                  매니저
                  <button className='btn-add'></button>
                </p>
                <div>
                  <input type='text' name='' value='김다영'/>
                  <span className='extra'>2022.5.12</span>
                </div>
              </div>
              <div className='item'>
                <p>
                  웨이터
                  <button className='btn-add'></button>
                </p>
                <div>
                  <input type='text' name='' value='박문수'/>
                  <span className='extra'>2022.5.12</span>
                </div>
                <div>
                  <input type='text' name='' value='홍길동'/>
                  <span className='extra'>2022.5.12</span>
                </div>
              </div>
              <div className='item'>
                <p>
                  POS System
                  <button className='btn-add'></button>
                </p>
                <div>
                  <input type='text' name='' value='없음' />
                </div>
              </div>   
              <div className='item'>
                <p>
                  기타
                  <button className='btn-add'></button>
                </p>
                <div>
                  <input type='text' name='' value='없음' />
                </div>
              </div>
              <button type='primary' className='btn-save'>등록</button>
            </div>    
          </div>
            {/* <div id='biz-popup' className='sale'>
                <div>
                  
            </div> */}
            <footer id='footer'>
                <a href='/' class='home'>
                  <figure>
                    <img src='../../assets/img/icon_home_01.svg' />
                    <span>홈</span>
                  </figure>
                </a>
                <a href='!#' class='reservation'>
                  <figure>
                    <img src='../../assets/img/icon_reservation_01.svg' />
                    <span>예약</span>
                  </figure>
                </a>
                <a href='!#' class='my-loc'>
                  <figure>
                    <img src='../../assets/img/icon_my_loc_01.svg' />
                    <span>내위치</span>
                  </figure>
                </a>
                <a href='!#' class='chat'>
                  <figure>
                    <img src='../../assets/img/icon_chat_01.svg' />
                    <span>채팅</span>
                  </figure>
                </a>
                <a href='!#' class='my-page'>
                  <figure>
                    <img src='../../assets/img/icon_my_page_01.svg'/>
                    <span>마이페이지</span>
                  </figure>
                </a>
            </footer>
  
    </div>
  );
};

export default SetStaff;