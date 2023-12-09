
function CustomButton(props){
    const {text, size, onHandleClick} = props
    return(
        <button className={`btn ${size}`} onClick={onHandleClick}>{text}</button>
    )
}
export default CustomButton