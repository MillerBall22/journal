import './task.styles.scss'

const Task = ({ mainTask, subTasks}) => {
    return (
        <div className='task-container'>
            <div className='main-task-container'>
                <h4>{mainTask}</h4>
            </div>
            {subTasks &&
                <div className='sub-tasks-container'>
                    {subTasks.map((subTask) => (
                        <div key={subTask} className='sub-task-container'>
                            <p >{subTask}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Task;