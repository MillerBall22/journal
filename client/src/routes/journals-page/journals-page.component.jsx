import './journals-page.styles.scss';
import JournalForm from '../../components/journal-form/journal-form.component';
import JournalsDisplay from '../../components/journals-display/journals-display.component';


const JournalsPage = () => {
    return(
        <div className='journals-page-container'>
            <JournalsDisplay/>
            <JournalForm/>
        </div>
    );
}

export default JournalsPage;