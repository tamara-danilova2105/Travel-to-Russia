function Search({ setValueSearch }) {
    return (
        <div>
            <form>
                <input
                    className="search-input"
                    type='text'
                    placeholder="Введите название региона..."
                    onChange={(e) => setValueSearch(e.target.value)}/>
            </form>
        </div>
    );
}

export default Search;