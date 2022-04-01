function Search({ setValueSearch }) {

    return (
        <div>
            <input
                className="search-input"
                type='text'
                placeholder="Введите название региона..."
                onChange={(e) => setValueSearch(e.target.value)}/>
        </div>
    );
}

export default Search