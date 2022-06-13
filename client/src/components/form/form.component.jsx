import FormInput from '../form-input/form-input.component';
import DropdownButton from '../dropdown-button/dropdown-button.component';
import Button from '../button/button.component';

const Form = ({ form, title, className, onSubmit, buttons }) => {
    return (
        <div className={className}>
            <form  onSubmit={onSubmit}>
                <h1>{title}</h1>
                {form.map((formIndex, index) => {
                    if (formIndex.comp === 'input') {
                        return (
                            <div key={index} className={formIndex.class}>
                                <FormInput
                                    label={formIndex.label}
                                    type="text"
                                    onChange={formIndex.onChange}
                                    name={formIndex.name}
                                    value={formIndex.value}
                                    />
                            </div>
                            );
                    }

                    if (formIndex.comp === 'number') {
                        return (
                            <div key={index} className={formIndex.class}>
                                <FormInput
                                    label={formIndex.label}
                                    type="number"
                                    onChange={formIndex.onChange}
                                    name={formIndex.name}
                                    value={formIndex.value}
                                    />
                            </div>
                            );
                    }


                    if (formIndex.comp === 'dropdown-button') {
                        return (
                            <div key={index} className={formIndex.class}>
                                <DropdownButton 
                                    options={formIndex.options}
                                    onChange={formIndex.onChange}
                                    name={formIndex.name} 
                                    label={formIndex.label}
                                    value={formIndex.value}
                                />
                            </div>
                        )
                    }

                    if (formIndex.comp === 'button') {
                        return (
                            <div key={index} className={formIndex.class}>
                                <Button onClick={formIndex.onClick} type={formIndex.type}>{formIndex.label}</Button>
                            </div>
                        )
                    }
                            })}

                <div className='buttons-container'>
                    {
                        buttons.map((button, index) => {
                            return (
                                <div key={index} className={button.class}>
                                    <Button onClick={button.onClick} type={button.type}>{button.label}</Button>
                                </div>
                            )
                        })
                    }

                </div>
            </form>
        </div>
    )
}

export default Form;