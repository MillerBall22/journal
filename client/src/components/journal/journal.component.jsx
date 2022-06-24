import {useNavigate} from 'react-router-dom';

import './journal.styles.scss'

const Journal = ({title, className}) => {
    const navigate = useNavigate()
    const navigateToJournal = () => {
        navigate(`/journal/${title}`);
    }

    return (        
        <div className={className} onClick={navigateToJournal}>
            <h2>{title}</h2>
        </div>
    )
}

export default Journal;