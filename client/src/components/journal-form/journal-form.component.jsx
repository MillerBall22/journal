import { useState } from "react";

import './journal-form.styles.scss'

import Form from '../form/form.component';
import { httpAddNewJournal } from "../../hooks/requests";

const defaultEntryFormFields = {
    entryName: '',
    journal: '',
    hoursTaken: 0,
    entryDetails: '',
}

const defaultJournalFormFields = {
    journalName: '',
}

const journals = [
    { value: '0.5', label: 'x0.5' },
    { value: '1.0', label: 'x1.0' },
    { value: '1.5', label: 'x1.5' },
    { value: '2.0', label: 'x2.0' },
]

const JournalForm = () => {
    const [entryFormFields, setEntryFormFields] = useState(defaultEntryFormFields);
    const [journalFormFields, setJournalFormFields] = useState(defaultJournalFormFields);

    const {entryName, journal, entryDetails, hoursTaken} = entryFormFields;
    const {journalName} = journalFormFields;

    const resetEntryFormFields = () => {
        setEntryFormFields(defaultEntryFormFields);
    }

    const resetJournalFormFields = () => {
        setJournalFormFields(defaultJournalFormFields);
    }
    
    const handleEntrySubmit = async (event) => {
        event.preventDefault();
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

    const buttons = [
    {
        class: 'buttons-container',
        label: 'Reset',
        onClick: () => {},
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
            <Form title='New Entry' form={newEntryForm} className='new-entry-form-container' onSubmit={handleEntrySubmit} buttons={buttons} />
            <Form title='New Journal' form={newJournalForm} className='new-entry-form-container' onSubmit={handleJournalSubmit} buttons={buttons} />
        </div>
    )
}

export default JournalForm;