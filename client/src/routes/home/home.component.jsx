import './home.styles.scss';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import JournalForm from '../../components/journal-form/journal-form.component';


const Home = () => {
    return(
        <div className='home-container'>
            <ToDoList/>
            <JournalForm/>
        </div>
    );
}

export default Home;