const SortBttns = ({sortBy, setSortBy}) => {
    return(
        <div className="flex justify-evenly p-4">
            <button onClick={() => setSortBy("name")} className={`${sortBy === "name"? "bg-blue-500": ""}`} >
                Sort by Name
            </button>
            <button onClick={() => setSortBy("category")} className={`${sortBy === "category"? "bg-blue-500": ""}`}>
                Sort by Category
            </button>
        </div>
    );
}
export default SortBttns;