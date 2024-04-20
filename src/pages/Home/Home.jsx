import { useTask } from '../../hooks/useTask';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskAdd } from '../../components/TaskAdd/TaskAdd';
import { Title } from '../../components/Title/Title';
import { TaskSearch } from '../../components/TaskSearch/TaskSearch';
import logo from '../../logo.svg';
import "./Home.css";
// Se define el componente Home de la aplicación 
const Home = () => {
    // Creamos todas las instancias de acceso 
    // de las funciones del archivo useTasks.jsx importado previamente
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
    
    // Exportamos el componente
    return (
        <div className='card-task'>
            <div className='react-logo'>
                <img src={logo} alt='react Logo' />
            </div>
            {/* Llamamos al componente title */}
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
                    {/* Llamamos al componente task add y le pasamos la funcion addTask */}
                        <TaskAdd addTask={addTask} />
                    </div>
                </div>
                <h3>Search: </h3>
                <div className='task-column'>
                    <div className="task-search">
                    {/* Llamamos al componente task search y le pasaos la funcion setSearch */}
                        <TaskSearch setSearch={setSearch} />
                    </div>
                </div>
            </div>
            <br /><br />
            {/* En caso que filteredTask no tenga valores mostramos el mensaje */}
            {filteredTasks.length === 0 ? (
                <div className="task-empty">
                    <h3>No tasks</h3>
                </div>

            ) : (
                // En caso contrario llamamos al componente tasklist, y le pasamos la lista filtrada junto a las funciones para trabajar con dichas tareas
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
