import './home.styles.scss';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import JournalsDisplay from '../../components/journals-display/journals-display.component';


const Home = () => {
    return(
        <div className='home-container'>
            <ToDoList/>
            <JournalsDisplay/>
        </div>
    );
}

export default Home;