
import './journal.styles.scss'

const Journal = ({title, className}) => {

    return (        
        <div className={className}>
            <h2>{title}</h2>
        </div>
    )
}

export default Journal;