import { useState, useEffect } from "react";

import './journal-form.styles.scss'

import Form from '../form/form.component';
import { httpAddNewJournal, httpGetAllJournals, httpAddNewEntry } from "../../hooks/requests";

const defaultEntryFormFields = {
    entryName: '',
    journal: '',
    hoursTaken: null,
    entryDetails: '',
}

const defaultJournalFormFields = {
    journalName: '',
}

const defaultJournals = []

const JournalForm = () => {
    const [entryFormFields, setEntryFormFields] = useState(defaultEntryFormFields);
    const [journalFormFields, setJournalFormFields] = useState(defaultJournalFormFields);
    const [journals, setJournals] = useState(defaultJournals);

    const {entryName, journal, entryDetails, hoursTaken} = entryFormFields;
    const {journalName} = journalFormFields;

    
    const getJournals = async () => {
        const journalNames = await httpGetAllJournals();
        setJournals(defaultJournals);
        journalNames.map((journal) => {
            setJournals(current => [...current, {
                label: journal.journalName,
                value: journal.journalName
            }])
        })}
        
    useEffect(() => {
        getJournals();
    },[])

    const resetEntryFormFields = () => {
        setEntryFormFields(defaultEntryFormFields);
    }

    const resetJournalFormFields = () => {
        setJournalFormFields(defaultJournalFormFields);
    }
    
    const handleEntrySubmit = async (event) => {
        const date = Date.now();
        const entry = {
            entry: entryName,
            journal: journal,
            hoursTaken: hoursTaken,
            entryDetails: entryDetails,
            entryDate: date,
        }
        event.preventDefault();
        httpAddNewEntry(entry);
        resetEntryFormFields();
    }

    const handleJournalSubmit = async (event) => {
        event.preventDefault();
        httpAddNewJournal(journalFormFields);
        resetJournalFormFields();
    }

    const handleEntryChange = (event) => {
        const { name, value } = event.target;
        setEntryFormFields({ ...entryFormFields, [name]: value });
    };

    const handleJournalChange = (event) => {
        const { name, value } = event.target;
        setJournalFormFields({ ...journalFormFields, [name]: value });
    };

    const newEntryForm = [
        {
            comp: 'input',
            class: 'entry-name-container',
            label: 'Entry Name',
            onChange: handleEntryChange,
            name: 'entryName',
            value: entryName
        },
        {
            comp: 'dropdown-button',
            options: journals,
            class: 'journal-dropdown-container',
            label: 'Journal',
            onChange: handleEntryChange,
            name: 'journal',
            value: journal,
        },
        {
            comp: 'number',
            class: 'hours-taken-dropdown-container',
            label: 'Hours Taken',
            onChange: handleEntryChange,
            name: 'hoursTaken',
            value: hoursTaken,
        },
        {
            comp: 'input',
            class: 'entry-details-container',
            label: 'Entry Details',
            onChange: handleEntryChange,
            name: 'entryDetails',
            value: entryDetails
        },
    ]

        const newJournalForm = [
        {
            comp: 'input',
            class: 'journal-name-container',
            label: 'Journal Name',
            onChange: handleJournalChange,
            name: 'journalName',
            value: journalName
        },
    ]

    const entryButtons = [
    {
        class: 'buttons-container',
        label: 'Reset',
        onClick: resetEntryFormFields,
        type: 'button'
    },
    {
        class: 'buttons-container',
        label: 'Submit',
        onClick: () => {},
        type: 'submit'
    },
    ]

    const journalButtons = [
    {
        class: 'buttons-container',
        label: 'Reset',
        onClick: resetJournalFormFields,
        type: 'button'
    },
    {
        class: 'buttons-container',
        label: 'Submit',
        onClick: () => {},
        type: 'submit'
    },
    ]

    return (
        <div className='journal-form-container'>
            <Form title='New Entry' form={newEntryForm} className='new-entry-form-container' onSubmit={handleEntrySubmit} buttons={entryButtons} />
            <Form title='New Journal' form={newJournalForm} className='new-entry-form-container' onSubmit={handleJournalSubmit} buttons={journalButtons} />
        </div>
    )
}

export default JournalForm;