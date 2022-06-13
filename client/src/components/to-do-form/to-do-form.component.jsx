import { useState } from "react";

import './to-do-form.styles.scss'

import Form from '../form/form.component';

const defaultFormFields = {
    mainTask: '',
    quadrant: '',
    subTasks: '',
}

const quadrants = [
    { value: 'Quadrant1', label: 'Quadrant 1' },
    { value: 'Quadrant2', label: 'Quadrant 2' },
    { value: 'Quadrant3', label: 'Quadrant 3' },
    { value: 'Quadrant4', label: 'Quadrant 4' },
]

const ToDoForm = () => {
    const [entryFormFields, setFormFields] = useState(defaultFormFields);

    const {mainTask, quadrant, subTasks} = entryFormFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        resetFormFields();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...entryFormFields, [name]: value });
    };

    const form = [
        {
            comp: 'input',
            class: 'main-task-container',
            label: 'Main Task',
            onChange: handleChange,
            name: 'mainTask',
            value: mainTask
        },
        {
            comp: 'dropdown-button',
            options: quadrants,
            class: 'quadrant-dropdown-container',
            label: 'Quadrant',
            onChange: handleChange,
            name: 'quadrant',
            value: quadrant,
        },
        {
            comp: 'input',
            class: 'sub-tasks-container',
            label: 'Sub Tasks',
            onChange: handleChange,
            name: 'subTasks',
            value: subTasks,
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
        <div className='task-form-container'>
            <Form title='New Task' form={form} className='new-task-form-container' onSubmit={handleSubmit} buttons={buttons} />
        </div>
    )
}

export default ToDoForm;