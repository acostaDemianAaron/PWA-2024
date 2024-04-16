import { useTask } from '../../hooks/useTask';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskAdd } from '../../components/TaskAdd/TaskAdd';
import { Title } from '../../components/Title/Title';
import logo from '../../logo.svg';
import "./Home.css";

const Home = () => {
    const {
        tasks,
        tasksCount,
        inProgressTaskCount,
        addTask,
        updateTask,
        completeTask,
        deleteTask
    } = useTask();

    return (
        <div className='card-task'>
            <div className='react-logo'>
                <img src={logo} />
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

            <div className="task-add">
                <h3>Add Task</h3>
                <TaskAdd addTask={addTask} />
            </div>

            <TaskList
                tasks={tasks}
                updateTask={updateTask}
                completeTask={completeTask}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default Home;
