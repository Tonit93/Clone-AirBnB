import '../SearchBar/style.scss';
import searchIcon from  '../Logo/search.svg'

const SearchBar = () => {
    return (
        <div className="searchbar">
        
        <div className="searchbar__btns-wrapper">
            <button className="searchbar__btn">Anywhere</button>
            <button className="searchbar__btn"> Any week</button>
            <button className="searchbar__btn searchbar__btn--light"> Add guests</button>
        </div>
       <button className="search__btn-search"><img src={searchIcon} alt='Seacr'/> 
       </button>

        </div>
    )
}

export default SearchBar;