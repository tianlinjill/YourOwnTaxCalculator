import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import TaxCalculator from "../../pages/TaxCalculator";
import TaxResults from "..//../pages/TaxResult";
import TaxContext from "../../context/tax-context";
/**
 * This is entry route
 * @returns
 */
const TaxCalculatorModule = () => {
  const [taxInfo, setTaxInfo] = useState(undefined);

  return (
    <TaxContext.Provider value={{ taxInfo: taxInfo, setTaxInfo: setTaxInfo }}>
      <Router>
        <Route exact path="/" component={TaxCalculator} />
        <Route path="/results" component={TaxResults} />
      </Router>
    </TaxContext.Provider>
  );
};

export default TaxCalculatorModule;
