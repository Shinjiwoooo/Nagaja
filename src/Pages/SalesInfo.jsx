import React from 'react';
import Manager from './component/Manager';
const SalesInfo = () => {
  return (
    <div id="biz-popup">
        <div className="h-80">
          <h3 className="f-noto">
            <button className="btn-close-popup"></button>
          </h3>
          <div className="contents">
            <Manager/>
          </div>
        </div>
    </div>
  );
};

export default SalesInfo;