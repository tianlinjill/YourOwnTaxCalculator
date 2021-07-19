import React from "react";
import "../../common/css/main.css";
import "./TaxCalculator.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BackgroundImg from "../../components/BackgroundImg";
import TaxInputForms from "../../components/TaxInputForms";
const TaxCalculator = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="ImgBox">
          <BackgroundImg isReadOnly={false} />
        </div>

        <div className="rightFormBox">
          <h2 className="rightFormBox-title">Calculate your tax</h2>
          <div className="rightFormBox-mention">
            <ExclamationCircleOutlined className="rightFormBox-mention-input-icon" />
            <p>Fields marked with * are mandatory</p>
          </div>
          <div className="TaxInputForms">
            <TaxInputForms isReadOnly={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaxCalculator;
