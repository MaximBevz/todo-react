import React from 'react';
import './app.css';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const App = () => {

    const data = [
        {label: 'Learning React...', important: false, like: false, id: 1},
        {label: 'rest...', important: false, like: false, id: 2},
        {label: 'Dinner and React...', important: true, like: false, id: 3},
    ];
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
};

export default App;