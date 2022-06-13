import './button.styles.scss'

const Button = ({ children, onClick, type }) => {
    return (
        <button className={`button-container`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button;