import { useState, useEffect } from 'react';
import { getQuadrantTasks } from '../../utils/firebase/firebase.utils';
import Task from '../task/task.component';


import './quadrant.styles.scss'

const Quadrant = ({title, quadrant}) => {
    const [quadrantData, setQuadrantData] = useState([]);

    useEffect(() => {
        const getTask = async () => {
            const data = await getQuadrantTasks(quadrant);
            console.log(data);
            await setQuadrantData(data);
            data.forEach(task => {
                console.log(task)
            });
        }
        getTask();
    },[])

    return (
        
        <div className='quadrant-container'>
            <div className='quadrant-title-container'>
                <h3>{title}</h3>
            </div>
            <div>
            {quadrantData.map(task => {
                return (
                    <Task key={task.id} mainTask={task.MainTask} subTasks={task.SubTasks} />
            )})}
            </div>
        
        </div>
    )
}

export default Quadrant;