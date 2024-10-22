const TodoFilter = ( { changeFilter, filter }) => {

    return(
        <section className="container mx-auto mt-8">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800">
              <button
                className={`${filter === 'all' 
                ? "text-blue-600 hover:text-gray-400 bg-yellow-400 py-1 px-3 rounded-md" 
                : "text-gray-400 hover:text-blue-600"
              }`} 
                onClick={() => changeFilter('all')}>
                All
              </button>
              <button 
                className={`${filter === 'active' 
                ? "text-blue-600 hover:text-gray-400 bg-yellow-400 py-1 px-3 rounded-md" 
                : "text-gray-400 hover:text-blue-600"
              }`} 
                onClick={() => changeFilter('active')}>
                Active
              </button>
              <button 
                className={`${filter === 'completed' 
                ? "text-blue-600 hover:text-gray-400 bg-yellow-400 py-1 px-3 rounded-md" 
                : "text-gray-400 hover:text-blue-600"
              }`} 
                onClick={() => changeFilter('completed')}>
                Completed
              </button>
            </div>      
          </section>
    );
};
export default TodoFilter;