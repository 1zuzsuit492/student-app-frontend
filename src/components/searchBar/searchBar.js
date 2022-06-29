import React from "react";

import './SearchBar.scss';

function SearchBar({searchTerm, setSearchTerm}) {

const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value)
}

return (
    <input className="SearchBar" placeholder="Search by name" value={searchTerm} onChange={updateSearchTerm}
)
}