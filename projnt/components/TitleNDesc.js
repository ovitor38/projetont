const TitleNDesc = ({title, description,className}) => (

    <div className={className}>      
        <h3>{title}</h3>
        {description && <p>{description}</p>}
    </div>
)
export default TitleNDesc;
