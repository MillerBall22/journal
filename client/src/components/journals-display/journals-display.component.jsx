import Journal from '../journal/journal.component';
import './journals-display.styles.scss'

const JournalsDisplay = () => {
    return (
        <div className='journals-display-container'>
            <h1 className='journals-heading'>Journals</h1>
            <div className='journals-container'>
                <Journal className='journal-green' title='Journal'/>
                <Journal className='journal-blue' title='Journal'/>
                <Journal className='journal-orange' title='Journal'/>
                <Journal className='journal-purple' title='Journal'/>
                <Journal className='journal-red' title='Journal'/>
                <Journal className='journal-yellow' title='Journal'/>
            </div>


        </div>
    )
}

export default JournalsDisplay;