function CustomButton(props) {
  const { text, buttonSize, onHandleClick } = props;
  return (
    <button className={`btn ${buttonSize}`} onClick={onHandleClick}>
      {text}
    </button>
  );
}
export default CustomButton;
