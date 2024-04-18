import { useTask } from '../../hooks/useTask';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskAdd } from '../../components/TaskAdd/TaskAdd';
import { Title } from '../../components/Title/Title';
import { TaskSearch } from '../../components/TaskSearch/TaskSearch';
import logo from '../../logo.svg';
import "./Home.css";

const Home = () => {
    const {
        tasks: filteredTasks,
        tasksCount,
        inProgressTaskCount,
        addTask,
        updateTask,
        completeTask,
        setSearch,
        deleteTask
    } = useTask();

    return (
        <div className='card-task'>
            <div className='react-logo'>
                <img src={logo} alt='react Logo' />
            </div>

            <Title />
            <div className="count-task">
                <h3>
                    N° Task: <span> {tasksCount} </span>
                </h3>
                <h3>
                    Incomplete: <span> {inProgressTaskCount} </span>
                </h3>
            </div>
            <br />
            <div className='task-center'>
                <h3>Task: </h3>
                <div className='task-column'>
                    <div className="task-add">
                        <TaskAdd addTask={addTask} />
                    </div>
                </div>
                <h3>Search: </h3>
                <div className='task-column'>
                    <div className="task-search">
                        <TaskSearch setSearch={setSearch} />
                    </div>
                </div>
            </div>
            <br /><br />
            {filteredTasks.length === 0 ? (
                <div className="task-empty">
                    <h3>No tasks</h3>
                </div>

            ) : (
                <TaskList
                    tasks={filteredTasks}
                    updateTask={updateTask}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                />
            )}
        </div>
    );
};

export default Home;
