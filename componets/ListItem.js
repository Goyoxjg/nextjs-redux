

const ListItem = ({ id }) => {
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="To Do"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            onKeyPress={(e) => e.key === "Enter" && handlerAdd()}
        />
        <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => handlerAdd()}
        >
            Add
        </button>
    </div>
}

export default  ListItem;
