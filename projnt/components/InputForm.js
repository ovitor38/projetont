  import { useForm } from "react-hook-form";
  import React from "react";



const InputForm = ({ name,  type = 'text', label, placeholder, options = {}, handleInput, errors = {},  value,className,id, registerForm}) => {
   
    const register = registerForm ? registerForm(name, {...options}) : {};
   
   return  (
   <div className={className} id={id}>
      {label && <label htmlFor={name}>{label}</label>}
      <input  type={type} id={id} name={name} placeholder={placeholder} {...register} onChange={handleInput}  value={value} />
      {errors[name] && <span>{errors[name]?.message}</span>}
   </div>
    )
   
};

export default InputForm

