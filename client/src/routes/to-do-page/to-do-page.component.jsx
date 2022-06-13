import './to-do-page.styles.scss';
import ToDoList from '../../components/to-do-list/to-do-list.component';
import ToDoForm from '../../components/to-do-form/to-do-form.component';


const ToDoPage = () => {
    return(
        <div className='to-do-page-container'>
            <ToDoList/>
            <ToDoForm/>
        </div>
    );
}

export default ToDoPage;