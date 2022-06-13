import Journal from '../journal/journal.component';
import './journals-display.styles.scss'

const JournalsDisplay = () => {
    return (
        <div className='journals-display-container'>
            <h1 className='journals-heading'>Journals</h1>
            <div className='journals-container'>
                <Journal className='journal-green' title='Journal'/>
                <Journal className='journal-blue' title='Journal'/>
            </div>


        </div>
    )
}

export default JournalsDisplay;