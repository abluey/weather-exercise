import '../styling/searchbar.scss';

const SearchBar = () => (
    <div className="search-bar">
    <form action="/" method="get">
        <input type="text" id="city-search" placeholder="Search a city" name="s"
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;