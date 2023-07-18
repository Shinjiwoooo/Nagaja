import React from 'react';

const SetHoliday = () => {
  return (
    <div id="biz-popup">
        <div className="h-80">
            {/* <h3 className="f-noto">
                <button className="btn-close-popup"></button>
            </h3> */}
            <h3 className='f-noto'>
                정기휴무 설정
                <button className='btn-close-popup'></button>
            </h3>
            <div className='contents'>
                <select>
                    <option value='' selected>주 단위 휴무</option>
                    <option value=''>휴무1</option>
                    <option value=''>휴무2</option>
                    <option value=''>휴무3</option>
                </select>
                <div className='checkbox-container weekly'>
                    <input type='checkbox' name='vac-weekly' id='w-mon'/>
                    <label for='w-mon'>월</label>
                    <input type='checkbox' name='vac-weekly' id='w-tue'/>
                    <label for='w-tue'>화</label>
                    <input type='checkbox' name='vac-weekly' id='w-wed'/>
                    <label for='w-wed'>수</label>
                    <input type='checkbox' name='vac-weekly' id='w-thu'/>
                    <label for='w-thu'>목</label>
                    <input type='checkbox' name='vac-weekly' id='w-fri'/>
                    <label for='w-fri'>금</label>
                    <input type='checkbox' name='vac-weekly' id='w-sat'/>
                    <label for='w-sat'>토</label>
                    <input type='checkbox' name='vac-weekly' id='w-sun'/>
                    <label for='w-sun'>일</label>
                </div>
                <button type='primary' className='btn-save'>등록</button>
            </div>
            {/* <div className="contents">
                <div className="wrap">
                    <div id='biz-popup' className='sale'>
                        <div>
        
                        </div>
                    </div>
                    <footer id='footer' className="footer">
                        <a href='/' className='home'>
                            <figure>
                                <img src='../../assets/img/icon_home_01.svg'/>
                                <span>홈</span>
                            </figure>
                        </a>
                        <a href='!#' className='reservation'>
                            <figure>
                                <img src='../../assets/img/icon_reservation_01.svg'/>
                                <span>예약</span>
                            </figure>
                        </a>
                        <a href='!#' className='my-loc'>
                            <figure>
                                <img src='../../assets/img/icon_my_loc_01.svg'/>
                                <span>내위치</span>
                            </figure>
                        </a>
                        <a href='!#' className='chat'>
                            <figure>
                                <img src='../../assets/img/icon_chat_01.svg'/>
                                <span>채팅</span>
                            </figure>
                        </a>
                        <a href='!#' className='my-page'>
                            <figure>
                                <img src='../../assets/img/icon_my_page_01.svg' />
                                <span>마이페이지</span>
                            </figure>
                        </a>
                    </footer>
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

export default SetHoliday;