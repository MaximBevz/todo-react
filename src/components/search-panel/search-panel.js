import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const holderText = "Поиск по записям"
    return (
        <input
            type="text"
            className="search-input"
            placeholder={holderText}
        />
    )
}

export default SearchPanel;