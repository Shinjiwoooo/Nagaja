
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SalesInfo from './Pages/SalesInfo';
import { useLayoutEffect } from 'react';
import SetBreakTime from './Pages/modal/SetBreakTime';
import SetHoliday from './Pages/modal/SetHoliday';
import SetStaff from './Pages/modal/SetStaff';
import SetTime from './Pages/modal/SetTime';

function App() {

  useLayoutEffect(() => {
    


    
    import("../src/assets/css/common.css");
    import("../src/assets/css/board.css");
    import("../src/assets/css/common_biz.css");
  });


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SalesInfo />} />
        {/* <Route path="/change-manager" exact element={<ChangeManager />} /> */}
        <Route path="/set-breaktime" exact element={<SetBreakTime />} /> //브레이크타임
        <Route path="/set-holiday" exact element={<SetHoliday />} /> //정기휴무
        <Route path="/set-staff" exact element={<SetStaff />} /> //인원설정
        <Route path="/set-time" exact element={<SetTime />} /> // 영업시간설정
      </Routes>
    </BrowserRouter>
  );
}

export default App;
