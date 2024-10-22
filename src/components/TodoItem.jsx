import CheckIcon from "./Icons/CheckIcon";
import CrossIcon from "./Icons/CrossIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {

    const {id, title, completed} = todo;

    return(
       <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800">
            <button 
                className={`w-5 h-5 border-2 rounded-full flex-none  ${completed 
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                    : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                { completed && <CheckIcon /> }
    
            </button>
            <p className={`grow text-gray-600 dark:text-gray-400 ${ completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article> 
    );
};
export default TodoItem;