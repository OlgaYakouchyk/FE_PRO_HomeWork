
function CustomInput(props){
    const {value, size, onHandleChange} = props
    return(
        <div className="input_conteiner" >
            <input className={`input_data ${size}`}
             onChange={onHandleChange} 
             value={value} />
            </div>
    )
}export default CustomInput