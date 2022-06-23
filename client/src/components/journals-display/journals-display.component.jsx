import { useState, useEffect } from 'react';
import { httpGetAllJournals } from '../../hooks/requests';
import './journals-display.styles.scss'

import Journal from '../journal/journal.component';

const defaultJournals = []

const classes = [
    'journal-green',
    'journal-blue',
    'journal-orange',
    'journal-purple',
    'journal-red',
    'journal-yellow',
]

const JournalsDisplay = () => {
    const [journals, setJournals] = useState(defaultJournals)

    const getJournals = async () => {
        const journalNames = await httpGetAllJournals();
        setJournals(defaultJournals);
        journalNames.map((journal) => {
            const classNum = Math.floor(Math.random() * (5 - 0) + 1)

            setJournals(current => [...current, {
                journalName: journal.journalName,
                class: classes[classNum]
            }])
        })}

    useEffect(() => {
        getJournals();
    },[])

    return (
        <div className='journals-display-container'>
            <h1 className='journals-heading'>Journals</h1>
            <div className='journals-container'>
                {journals.map((journal) => {
                    return (
                        <Journal className={journal.class} title={journal.journalName}/>
                    )
                })}
            </div>


        </div>
    )
}

export default JournalsDisplay;