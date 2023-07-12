
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SalesInfo from './Pages/SalesInfo';
import { useLayoutEffect } from 'react';
import ChangeManager from './Pages/modal/ChangeManager';
import SetBreakTime from './Pages/modal/SetBreakTime';
import SetHoliday from './Pages/modal/SetHoliday';
import SetStaff from './Pages/modal/SetStaff';
import SetTime from './Pages/modal/SetTime';

function App() {

  useLayoutEffect(() => {
    document.body.classList = "";
    import("../src/assets/css/common.css");
    import("../src/assets/css/board.css");
    import("../src/assets/css/common_biz.css");
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SalesInfo />} />
        <Route path="/change-manager" exact element={<ChangeManager />} />
        <Route path="/set-breaktime" exact element={<SetBreakTime />} />
        <Route path="/set-holiday" exact element={<SetHoliday />} />
        <Route path="/set-staff" exact element={<SetStaff />} />
        <Route path="/set-time" exact element={<SetTime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
