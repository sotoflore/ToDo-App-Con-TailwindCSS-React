const TodoComputed =  ( { computedItemLeft, clearCompleted }) => {

    return(
        <section className="p-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{computedItemLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    );
};
export default TodoComputed;