import "../../../src/assets/css/Corporate_application/safe_info.css"

const Manager = () => {
    return(
        <div className="wrap">
            <main className='biz info sale'>
                <div className='shop-info'>
                    <img src='../../assets/img/img_board_sample_05.png'/>
                    <h3 className='name f-noto'>
                        나가자 김밥집
                        <button className='btn-edit'></button>
                    </h3>
                    <p>
                        <span className='title'>분류명</span>
                        <span>음식점</span>
                    </p>
                    <p>
                        <span className='title'>담당자</span>
                        <span>홍길동</span>
                    </p>
                    <p className='address clearfix'>
                        <span className='title'>주소</span>
                        <span>서울시 구로구 구로디지털로 JNK 1234호</span>
                    </p>
                </div>
                <ul className='common-tab'>
                    <li>
                        <a href='!#'>기본정보</a>
                    </li>
                    <li className='active'>
                        <a href='!#'>영업정보</a>
                    </li>
                    <li>
                        <a href='!#'>상품정보</a>
                    </li>
                </ul>
                <div className='common-container'>
                    <div className='manager'>
                        <p>매니저</p>
                        <div>
                        <input type='text' name='' value='김다영'/>
                        <span className='extra'>2022.5.12</span>
                        </div>
                    </div>
                    <div className='waiter'>
                        <p>웨이 터</p>
                        <div>
                        <input type='text' name='' value='박문수'/>
                        <span className='extra'>2022.5.12</span>
                        </div>
                        <div>
                        <input type='text' name='' value='홍길동'/>
                        <span className='extra'>2022.5.12</span>
                        </div>
                        <button className='default btn-edit'>설정</button>
                    </div>

                    <div className='additional'>
                        <p>추가기능</p>
                        <div>
                        <div className='item'>
                            <input type='radio' name='additional' id='delivery' checked/>
                            <label for='delivery'>배달</label>
                        </div>
                        <div className='item'>
                            <input type='radio' name='additional' id='reservation'/>
                            <label for='reservation'>예약</label>
                        </div>
                        <div className='item'>
                            <input type='radio' name='additional' id='pickup'/>
                            <label for='pickup'>픽업</label>
                        </div>
                        <div className='item'>
                            <input type='radio' name='additional' id='drop'/>
                            <label for='drop'>드랍</label>
                        </div>
                        </div>
                    </div>

                    <div className='has-btn'>
                        <p>정기휴무</p>
                        <div>
                        <input type='text' name='' value='' placeholder='없음' readonly/>
                        <button className='default btn-edit'>수정</button>
                        </div>
                    </div>

                    <div className='has-btn'>
                        <p>영업시간</p>
                        <div>
                        <input type='text' name='' value='10 : 00 ~ 20 : 00' readonly/>
                        <button className='default btn-edit'>수정</button>
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
            <div id='biz-popup' class='sale'>
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
            </div>
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
        </div>
    );
};

export default Manager;