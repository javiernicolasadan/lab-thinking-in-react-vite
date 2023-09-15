

const SearchBar = ({search, setSearch}) => {
    
    
    
    return ( 
        <>
            <label>Search:
                <input value={search} onChange={(e)=> {setSearch(e.target.value)}}></input>
            </label>
        </>
     );
}
 
export default SearchBar;