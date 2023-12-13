import {useGlobalContext} from "./context.jsx";

const SearchForm = () => {
    const {searchTerm, setSearchTerm} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const searchValue = e.target.elements.search.value;
        console.log('searchValue', searchValue);
        if (!searchValue) return;
        setSearchTerm(searchValue);
    }
    return (
        <section>
            <h1 className={'title'}>unsplash images</h1>
            <form className={'search-form'} onSubmit={handleSubmit}>
                <input type="text" className={'form-input search-input'} name={'search'} placeholder={'cat'}/>
                <button type={'submit'} className={'btn'}>search</button>
            </form>
        </section>
    )
};

export default SearchForm;
