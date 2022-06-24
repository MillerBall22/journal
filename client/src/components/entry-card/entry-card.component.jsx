import moment from 'moment-timezone'

import './entry-card.styles.scss'


const EntryCard = ({ entry }) => {
    return (
        <div className='entry-card-container' >
            <h1 className='entry-title'>{entry.entry}</h1>
            <p>{moment.tz(entry.entryDate, "America/Swift_Current").format("LLL")}</p>
            <p>{entry.hoursTaken} Hours</p>
            <p>{entry.entryDetails}</p>
        </div>
    )
}

export default EntryCard;