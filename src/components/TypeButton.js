

const TypeButton = ({ type, clickHandler, typeButtonClass }) => {
  return (
    <button
      data-value={type}
      onClick={clickHandler}
      className={typeButtonClass(type)}
    >
      {type}
    </button>
  );
};

export default TypeButton;
