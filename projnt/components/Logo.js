
const Logo = ({children,logoType,classDiv}) => {

    return (
    <div className={logoType}>
        <div className={classDiv}>{children}</div>       
    </div>
)};

export default Logo;