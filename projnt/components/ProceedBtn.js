const ProceedBtn = ({divName, typeButton = 'submit', btnId,text}) => {
    return (

        <div className={divName}>
            <button required type={typeButton} id={btnId}>{text}</button>
            <span className="error"></span>
        </div>


    )
};

export default ProceedBtn;