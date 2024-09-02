const UnitAmount = ({ value, valueType, label, changeHandler }) => {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={value}
        className={"value" + valueType}
        onChange={changeHandler}
      />
    </label>
  );
};

export default UnitAmount;
