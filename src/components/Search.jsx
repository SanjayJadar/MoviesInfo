import React from "react";

const Search = (props) => {

    const {search, setSearch} = props;

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="flex justify-center pt-10">
            <input className="py-2 px-60 rounded-lg" type="text" placeholder="Search for Movies..." value={search} onChange={onSearch}/>
        </div>
    )
}

export default Search;