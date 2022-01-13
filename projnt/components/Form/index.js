import style from './form.module.css'

export const Form = ({children, onSubmit, direction}) =>  {
    return (
        <form className={`${style.form} ${direction === 'horizontal' ? style.formHorizontal : style.formVertical}`} onSubmit={onSubmit}>
            {children}
        </form>
    )
}