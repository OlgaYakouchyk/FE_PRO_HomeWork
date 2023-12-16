
function CustomInput(props){
    const {value, size, onHandleChange, placeHolder} = props
    return(
        <input className={`input_date ${size}`}
        placeholder={placeHolder}
        value={value} 
        onChange={onHandleChange}/>
    )
}
export default CustomInput