const TypeButton = ({ type, clickHandler, typeButtonClass }) => {
  return (
    <button
      type="button"
      data-value={type}
      onClick={clickHandler}
      className={typeButtonClass(type)}
      aria-pressed={!typeButtonClass(type) ? "false" : "true"}
    >
      {type}
    </button>
  );
};

export default TypeButton;
