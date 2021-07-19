import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Form, InputNumber, Button, Select, message } from "antd";

import "./TaxInputForms.css";

import TaxContext from "../../context/tax-context";
const { Option } = Select;
const { Item } = Form;
/*
TaxInputForms component has two main function
  props: isReadOnly type: bool (false: means in the calculator page, true: means in the result page.)
  1. if in TaxCalculator page, this components received and submit user informations. 
          and backgroundImg's content will show. 
  2. if in TaxResult page, this components disable all form's value and hidden the calculate button.
          and backgroundImg's content will hidden. 
*/
const TaxInputForms = ({ isReadOnly }) => {
  // useContext to pass the date between components.
  const { taxInfo, setTaxInfo } = useContext(TaxContext);

  let history = useHistory();

  // function called after data validation success.
  const onFinish = (values) => {
    // step 1/2: submit form data to useContaxt hook.
    setTaxInfo(values);
    // step 2/2: direct to the results page.
    console.log("inputForm", values);
    history.push("/results");
  };

  // function called once data validation faild.
  const onFinishFailed = (errorInfo) => {
    message.warning("Some informtaion is missing.");
  };

  return (
    <Form
      className="customizedForm"
      name="basic"
      layout="vertical"
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Item
        style={{ marginBottom: "0px" }}
        name="country"
        label="Select your country of residence"
        rules={[{ required: true, message: "Country is required." }]}
        initialValue={taxInfo?.country}
      >
        {/* Contry selector wraped by Item*/}
        <Select initialvalues="Australia" disabled={isReadOnly}>
          <Option value="Australia">Australia</Option>
          <Option value="New Zealand">New Zealand</Option>
        </Select>
      </Item>

      <Item
        style={{ marginBottom: "0px" }}
        name="incomeYear"
        label="Select an income year"
        rules={[{ required: true, message: "Please select an imcome year." }]}
        initialValue={taxInfo?.incomeYear}
      >
        {/* incomeYear selector wraped by Item*/}
        <Select disabled={isReadOnly}>
          <Option value="2021">2020 - 2021</Option>
          <Option value="2020">2019 - 2020</Option>
        </Select>
      </Item>

      <Item
        label="Enter your total taxable income for the income year"
        name="amount"
        initialValue={taxInfo?.amount}
        rules={[
          {
            required: true,
            message: "Please check your input, only accept number.",
          },
          {
            pattern: new RegExp(/^[0-9]\d*$/, "g"),
            message: "Only accept number.",
          },
        ]}
      >
        {/* amount input wraped by Item*/}
        <InputNumber
          value
          disabled={isReadOnly}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        />
      </Item>

      <Item
        hidden={isReadOnly}
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        {/* button wraped by item */}
        <Button type="primary" htmlType="submit" className="calculateBtn">
          Calculate
        </Button>
      </Item>
    </Form>
  );
};
TaxInputForms.propTypes = {
  isReadOnly: PropTypes.bool.isRequired,
};
export default TaxInputForms;
