import Quadrant from '../quadrant/quadrant.component';
import './to-do-list.styles.scss'

const ToDoList = () => {
    return (
        <div className='to-do-container'>
            <h1 className='to-do-heading'>To Do</h1>
            <div className='quadrants-container'>
                <Quadrant title='Important & Urgent' quadrant='Quadrant1'/>
                <Quadrant title='Important & Not Urgent' quadrant='Quadrant2'/>
                <Quadrant title='Not Important & Urgent' quadrant='Quadrant3'/>
                <Quadrant title='Not Important & Not Urgent' quadrant='Quadrant4'/>
            </div>


        </div>
    )
}

export default ToDoList;