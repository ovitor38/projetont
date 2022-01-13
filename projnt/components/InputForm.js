const InputForm = ({ name,  type = 'text', label, placeholder, handleInput, value,className,id}) => {
   return  (
   <div className={className} id={id}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} id={id} name={name} placeholder={placeholder} onChange={handleInput}  value={value} />
    </div>
    )
   
};

export default InputForm
