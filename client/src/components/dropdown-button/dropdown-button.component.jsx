import './dropdown-button.styles.scss';

const DropdownButton = ({options, onChange, label, name, value}) => {
    return (
        <div className='dropdown-button'>
            <select className='select-container' onChange={onChange} required name={name} value={value}>
                <option value="" selected disabled hidden>Select an Option</option>
                {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            {label && (
                <label
                    className='dropdown-button-label'
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default DropdownButton;