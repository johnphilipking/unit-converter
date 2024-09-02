const UnitSelect = ({ id, selectType, options, value, changeHandler }) => {
  const selectOptionsUs = options["us"].map((unit) => (
    <option key={selectType + unit.symbol} value={unit.symbol}>
      {unit.name}
    </option>
  ));
  const selectOptionsMetric = options["metric"].map((unit) => (
    <option key={selectType + unit.symbol} value={unit.symbol}>
      {unit.name}
    </option>
  ));

  return (
    <label>
      Convert {selectType}:
      <select
        id={id}
        value={value}
        className={"convert" + selectType}
        onChange={changeHandler}
      >
        <option value="">Select</option>
        {selectOptionsUs}
        {selectOptionsMetric}
      </select>
    </label>
  );
};

export default UnitSelect;
