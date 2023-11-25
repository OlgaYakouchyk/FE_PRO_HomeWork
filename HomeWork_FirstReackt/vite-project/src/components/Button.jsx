function CostomButton(props) {
  const { color, onClick, size, text } = props;
  return (
    <button
      className={`btn ${size}`}
      onClick={onClick}
      style={{ bagroundColor: color }}
    >
      {text}
    </button>
  );
}

export default CostomButton;
