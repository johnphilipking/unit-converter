export const roundNumber = (number) => {
  if (Number.isInteger(number) || Number(number).toFixed(2) === 0) {
    return number;
  }
  return Math.round(number * 100) / 100;
};

export const calculateUnits = (type, from, to, amount) => {
  // import formula data
  const unitMulipliers = require("../data/unit_multipliers.json");
  // validate args
  if (!amount || Number(amount) === 0 || from === "" || to === "") {
    return "";
  }
  // calculate and return the new converted value
  return (Number(amount) * unitMulipliers[type][from][to]);
};
