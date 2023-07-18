import React from 'react';
const SalesInfo = () => {
  return (
    <div id="biz-popup">
        <div className="h-80">
            <div className="contents">
                <main class='biz info sale'>
                    <div class='common-container'>
                        <div class='manager'>
                            <p>매니저</p>
                            <div>
                                <input type='text' name='' value='김다영'/>
                                <span class='extra'>2022.5.12</span>
                            </div>
                        </div>

                        <div class='waiter'>
                            <p>웨이터</p>
                            <div>
                            <input type='text' name='' value='박문수'/>
                            <span class='extra'>2022.5.12</span>
                            </div>
                            <div>
                            <input type='text' name='' value='홍길동'/>
                            <span class='extra'>2022.5.12</span>
                            </div>
                            <button class='default btn-edit'>설정</button>
                        </div>

                        <div class='additional'>
                            <p>추가기능</p>
                            <div>
                            <div class='item'>
                                <input type='radio' name='additional' id='delivery' checked/>
                                <label for='delivery'>배달</label>
                            </div>
                            <div class='item'>
                                <input type='radio' name='additional' id='reservation'/>
                                <label for='reservation'>예약</label>
                            </div>
                            <div class='item'>
                                <input type='radio' name='additional' id='pickup'/>
                                <label for='pickup'>픽업</label>
                            </div>
                            <div class='item'>
                                <input type='radio' name='additional' id='drop'/>
                                <label for='drop'>드랍</label>
                            </div>
                            </div>
                        </div>

                        <div class='has-btn'>
                            <p>정기휴무</p>
                            <div>
                            <input type='text' name='' value='' placeholder='없음' readonly/>
                            <button class='default btn-edit'>수정</button>
                            </div>
                        </div>

                        <div class='has-btn'>
                            <p>영업시간</p>
                            <div>
                            <input type='text' name='' value='10 : 00 ~ 20 : 00' readonly/>
                            <button class='default btn-edit'>수정</button>
                            </div>
                        </div>

                        <div class='has-btn break-time'>
                            <p>브레이크 타임</p>
                            <div>
                            <button class='default btn-edit'>수정</button>
                            <input type='text' name='' value='13 : 00 ~ 14 : 00' readonly/>
                            <input type='text' name='' value='16 : 30 ~ 17 : 00' readonly/>
                            </div>
                        </div>

                        <div>
                            <p>한 타임 당 예약 가능 인원</p>
                            <input type='text' name='' value='' placeholder='예약 가능한 인원을 입력해주세요.'/>
                        </div>

                        <div class='exchange-type'>
                            <p>상품 기준 통화 설정</p>
                            <div>
                            <input type='checkbox' name='exchange_type' id='ex-t-dollar' checked/>
                            <label for='ex-t-dollar' class='dolor'>$</label>
                            <input type='checkbox' name='exchange_type' id='ex-t-won' checked/>
                            <label for='ex-t-won' class='won'>₩</label>
                            <input type='checkbox' name='exchange_type' id='ex-t-peso' checked/>
                            <label for='ex-t-peso' class='peso'>₱</label>
                            <input type='checkbox' name='exchange_type' id='ex-t-yuan'/>
                            <label for='ex-t-yuan' class='yuan'>¥</label>
                            <input type='checkbox' name='exchange_type' id='ex-t-yen'/>
                            <label for='ex-t-yen' class='yen'>円</label>
                            </div>
                        </div>
                    </div>
                </main>
                <footer id='footer'>
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
                        <img src='../../assets/img/icon_my_page_01.svg'/>
                        <span>마이페이지</span>
                    </figure>
                    </a>
                </footer>
            </div>
        </div>
    </div>
  );
};

export default SalesInfo;