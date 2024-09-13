import React, { useState } from "react";
import TypeButton from "./TypeButton";
import UnitSelect from "./UnitSelect";
import UnitAmount from "./UnitAmount";
import { roundNumber, calculateUnits } from "../util/conversion_functions";

const Ui = () => {
  const [unitType, setUnitType] = useState("length");
  const [unitFrom, setUnitFrom] = useState("in");
  const [unitTo, setUnitTo] = useState("cm");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const units = require("../data/units_sorted.json");
  const unitOptions = units[unitType];

  const typeButtonClass = (type) => {
    if (type === unitType) {
      return "active";
    }
    return "";
  };

  const handleTypeButtonClick = (event) => {
    setUnitType(event.target.getAttribute("data-value"));
    setUnitFrom("");
    setUnitTo("");
    setFromValue("");
    setToValue("");
  };

  const handleUnitChange = (event) => {
    const id = event.target.getAttribute('id');
    if (id === "convertFrom") {
      setUnitFrom(event.target.value);
      setToValue(
        roundNumber(
          calculateUnits(unitType, event.target.value, unitTo, fromValue)
        )
      );
    } else {
      setUnitTo(event.target.value);
      setToValue(
        roundNumber(
          calculateUnits(unitType, unitFrom, event.target.value, fromValue)
        )
      );
    }
  };

  const handleAmountChange = (event) => {
    if (event.target.classList.contains("valueFrom")) {
      const val = event.target.value;
      setFromValue(val);
      if (val === ""){
        setToValue(0);
      } else {
        setToValue(
          roundNumber(calculateUnits(unitType, unitFrom, unitTo, val))
        );
      }
    }
  };

  return (
    <>
      <div className="type-container">
        <TypeButton
          type="length"
          clickHandler={handleTypeButtonClick}
          typeButtonClass={typeButtonClass}
        />
        <TypeButton
          type="volume"
          clickHandler={handleTypeButtonClick}
          typeButtonClass={typeButtonClass}
        />
        <TypeButton
          type="mass"
          clickHandler={handleTypeButtonClick}
          typeButtonClass={typeButtonClass}
        />
        <TypeButton
          type="area"
          clickHandler={handleTypeButtonClick}
          typeButtonClass={typeButtonClass}
        />
      </div>

      <h2>Select units</h2>

      <div className="selects-container">
        <UnitSelect
          id="convertFrom"
          selectType="From"
          options={unitOptions}
          value={unitFrom}
          changeHandler={handleUnitChange}
        />
        <UnitSelect
          id="convertTo"
          selectType="To"
          options={unitOptions}
          value={unitTo}
          changeHandler={handleUnitChange}
        />
      </div>

      <h2>Enter a value to convert</h2>

      <div className="values-container">
        <UnitAmount
          value={fromValue}
          valueType="From"
          label="Value"
          changeHandler={handleAmountChange}
        />
        <UnitAmount
          value={toValue}
          valueType="To"
          label="Conversion Result"
          changeHandler={() => {
            return;
          }}
        />
      </div>
    </>
  );
};

export default Ui;
