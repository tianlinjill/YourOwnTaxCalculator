import React, { useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import TaxContext from "../../context/tax-context";
import "../../common/css/main.css";
import "./TaxResult.css";
import BackgroundImg from "../../components/BackgroundImg";
import InputForms from "../../components/TaxInputForms";
import LinkButton from "../../components/link-button";
import { taxCalculator } from "../../common/utils/calculatorUtil";
import { useHistory } from "react-router-dom";

/**
 * This the second results page
 * @returns
 */
const TaxResult = () => {
  const { taxInfo } = useContext(TaxContext);
  const history = useHistory();
  // animation hoock for img movement
  const ImgMove = useSpring({
    from: { x: 0 },
    to: { x: 384 },
  });
  // animation hook for left side show up slowly.
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    if (taxInfo) {
      return;
    }
    history.push("/");
  }, [taxInfo]);
  if (!taxInfo) {
    return <div></div>;
  }
  /**
   * 1. pass the taxInfo object to taxCalculator.
   * 2. taxCalulator function calculates the tax brackets and waprs the object.
   */
  let resultForm = taxCalculator(taxInfo);

  return (
    <div className="container">
      <div className="card">
        {/* Left side */}
        <animated.div className="ImgBox" style={ImgMove}>
          <BackgroundImg isReadOnly={true} />
        </animated.div>
        <animated.div className="Form-disable" style={fade}>
          <h2>Your tax results</h2>
          <InputForms isReadOnly={true} />
          <div className="left-linkButton">
            <LinkButton onClick={() => history.goBack()}>
              Go back to previous screen
            </LinkButton>
          </div>
        </animated.div>
        {/* left side end */}

        {/* right side start*/}
        <animated.div className="Tax-results" style={fade}>
          <p className="Tax-results-heading">
            Your estimated taxable income is:
          </p>
          <div className="Tax-results-amount">
            <p> {resultForm.totalValue}.00</p>
          </div>
          <div className="Tax-results-breakdown">
            <p>Breakdown</p>
          </div>
          {/* sub Brackets start */}
          <div className="Brackets No1">
            <div className="tax-level-value">{resultForm.bracketsOneValue}</div>
            <div className="Brackets-title">
              Tax Brackets <br />
              <p>{resultForm.bracketsOne}</p>
            </div>
          </div>
          {/* second Brackets start*/}
          <div className="Brackets restBarckets">
            <div className="tax-level-value">{resultForm.bracketsTwoValue}</div>
            <div className="Brackets-title">
              Tax Brackets <br />
              <p>{resultForm.bracketsTwo}</p>
            </div>
          </div>
          {/* second Brackets end*/}
          {/* third Brackets start */}
          <div className="Brackets restBarckets">
            <div className="tax-level-value">
              {resultForm.bracketsThreeValue}
            </div>
            <div className="Brackets-title">
              Tax Brackets <br />
              <p>{resultForm.bracketsThree}</p>
            </div>
          </div>
          {/* third Brackets end */}
          {/* forth Brackets start */}
          <div className="Brackets restBarckets">
            <div className="tax-level-value">
              {resultForm.bracketsFourValue}
            </div>
            <div className="Brackets-title">
              Tax Brackets <br />
              <p> {resultForm.bracketsFour}</p>
            </div>
          </div>
          {/* forth Brackets end */}
          {/* fifth Brackets start */}
          <div className="Brackets restBarckets">
            <div className="tax-level-value">
              {resultForm.bracketsFiveValue}
            </div>
            <div className="Brackets-title">
              Tax Brackets <br />
              <p>{resultForm.bracketsFive}</p>
            </div>
          </div>
          {/* fifth Brackets end */}
        </animated.div>
        {/* right side end*/}
      </div>
    </div>
  );
};

export default TaxResult;
