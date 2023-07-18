import React from 'react';

const SetBreakTime = () => {
  return (
    <div id="biz-popup">
          <div className="h-80">
                <h3 className='f-noto'>
                  브레이크 타임 설정
                  <button className='btn-close-popup'></button>
                </h3>
                <div className='contents break-time'>
                  <div className='configure'>
                    <div>
                      <p>시작</p>
                      <select>
                        <option value=''>12:00</option>
                        <option value='' selected>13:00</option>
                        <option value=''>14:00</option>
                        <option value=''>15:00</option>
                        <option value=''>16:00</option>
                        <option value=''>17:00</option>
                        <option value=''>18:00</option>
                        <option value=''>19:00</option>
                        <option value=''>20:00</option>
                      </select>
                    </div>
                    <div>
                      <p>종료</p>
                      <select>
                        <option value=''>12:00</option>
                        <option value=''>13:00</option>
                        <option value='' selected>14:00</option>
                        <option value=''>15:00</option>
                        <option value=''>16:00</option>
                        <option value=''>17:00</option>
                        <option value=''>18:00</option>
                        <option value=''>19:00</option>
                        <option value=''>20:00</option>
                      </select>
                    </div>
                    <div>
                      <p></p>
                      <button className='default btn-add'>추가</button>
                    </div>
                  </div>
                  <ul className='result'>
                    <li>
                      13:00~14:00
                      <button className='btn-delete'></button>
                    </li>
                    <li>
                      16:30~17:00
                      <button className='btn-delete'></button>
                    </li>
                  </ul>
                  <button type='primary' className='btn-save'>등록</button>
                </div>
            {/* <div id='biz-popup' className='sale'>
              <div>
                <h3 className='f-noto'>
                  브레이크 타임 설정
                  <button className='btn-close-popup'></button>
                </h3>
                <div className='contents break-time'>
                  <div className='configure'>
                    <div>
                      <p>시작</p>
                      <select>
                        <option value=''>12:00</option>
                        <option value='' selected>13:00</option>
                        <option value=''>14:00</option>
                        <option value=''>15:00</option>
                        <option value=''>16:00</option>
                        <option value=''>17:00</option>
                        <option value=''>18:00</option>
                        <option value=''>19:00</option>
                        <option value=''>20:00</option>
                      </select>
                    </div>
                    <div>
                      <p>종료</p>
                      <select>
                        <option value=''>12:00</option>
                        <option value=''>13:00</option>
                        <option value='' selected>14:00</option>
                        <option value=''>15:00</option>
                        <option value=''>16:00</option>
                        <option value=''>17:00</option>
                        <option value=''>18:00</option>
                        <option value=''>19:00</option>
                        <option value=''>20:00</option>
                      </select>
                    </div>
                    <div>
                      <p></p>
                      <button className='default btn-add'>추가</button>
                    </div>
                  </div>
                  <ul className='result'>
                    <li>
                      13:00~14:00
                      <button className='btn-delete'></button>
                    </li>
                    <li>
                      16:30~17:00
                      <button className='btn-delete'></button>
                    </li>
                  </ul>
                  <button type='primary' className='btn-save'>등록</button>
                </div>
              </div>
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
    </div>
  );
};

export default SetBreakTime;