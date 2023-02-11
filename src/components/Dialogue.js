const Dialogue = ({ text, options, handleOptionClick }) => {
  return (
    <>
      <>{text}</>
      {options.map((option) => {
        return (
          <button onClick={() => handleOptionClick(option.section)}>
            {option.option}
          </button>
        );
      })}
    </>
  );
};

export default Dialogue;
