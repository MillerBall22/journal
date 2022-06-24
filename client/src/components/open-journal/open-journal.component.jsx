import { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetJournalEntries } from '../../hooks/requests';
import EntryCard from '../entry-card/entry-card.component';
import './open-journal.styles.scss'

const OpenJournal = () => {
    const [entries, setEntries] = useState([]);
    const {journalSelection} = useParams();

    const getEntries = async () => {
        const journalEntries = await httpGetJournalEntries(journalSelection);
        setEntries(journalEntries);
    }

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <div className='open-journal-container'>
            <h1 className='journal-title'>{journalSelection}</h1>
            <div className='entries-container'>
                {entries.map((entry, index) => {
                    return (<EntryCard key={index} entry={entry} />)
                })}
            </div>
        </div>
    )
}

export default OpenJournal;