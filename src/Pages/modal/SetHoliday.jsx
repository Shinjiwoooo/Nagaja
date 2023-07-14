import React from 'react';

const SetHoliday = () => {
  return (
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
            <div className='has-btn break-time'>
                <p>브레이크 타임</p>
                <div>
                    <button className='default btn-edit'>수정</button>
                    <input type='text' name='' value='13 : 00 ~ 14 : 00' readonly/>
                    <input type='text' name='' value='16 : 30 ~ 17 : 00' readonly/>
                </div>
            </div>
            <div>
                <p>한 타임 당 예약 가능 인원</p>
                <input type='text' name='' value='' placeholder='예약 가능한 인원을 입력해주세요.'/>
            </div>
            <div className='exchange-type'>
                <p>상품 기준 통화 설정</p>
                <div>
                    <input type='checkbox' name='exchange_type' id='ex-t-dollar' checked/>
                    <label for='ex-t-dollar' className='dolor'>$</label>
                    <input type='checkbox' name='exchange_type' id='ex-t-won' checked/>
                    <label for='ex-t-won' className='won'>₩</label>
                    <input type='checkbox' name='exchange_type' id='ex-t-peso' checked/>
                    <label for='ex-t-peso' className='peso'>₱</label>
                    <input type='checkbox' name='exchange_type' id='ex-t-yuan'/>
                    <label for='ex-t-yuan' className='yuan'>¥</label>
                    <input type='checkbox' name='exchange_type' id='ex-t-yen'/>
                    <label for='ex-t-yen' className='yen'>円</label>
                </div>
            </div>
        </div>
    </main> 
    <div id='biz-popup' className='sale'>
        <div>
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
    </div>
</div>
  );
};

export default SetHoliday;