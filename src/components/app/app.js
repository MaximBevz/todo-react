import React, {Component} from 'react';
import './app.scss';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.maxId = 4;
        this.state = {
            data: [
                {label: 'Learning React...', important: false, like: false, id: 1},
                {label: 'rest...', important: false, like: false, id: 2},
                {label: 'Dinner and React...', important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
        this.onFilterSelect = (filter) => {
            this.setState(({filter}));
        }

        this.filterPost = (items, filter) => {
            if(filter === 'like') {
                return items.filter(item => item.like);
            } else {
                return items;
            }
        }

        this.onUpdateSearch = term => {
            this.setState(({term}))
        }

        this.searchPost = (items, term) => {
            if(term.length === 0) {
                return items
            }
            return items.filter(item => {
                return item.label.indexOf(term) > -1;
            });
        }

        this.deleteItem = (id) => {
            this.setState(({data}) => {
               const index = data.findIndex(el => el.id === id);

                const before = data.slice(0, index);
                const after = data.slice(index + 1);

                const newArr = [...before, ...after];

                return {
                    data: newArr
                }
            });
        }
        this.addItem = (text) => {
            const newItem = {
                label: text,
                important: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
        this.onToggleImportant = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);

                const old = data[index];
                const newItem = {...old, important: !old.important}

                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            })
        }
        this.onToggleLike = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);

                const old = data[index];
                const newItem = {...old, like: !old.like}

                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            })
        }
    }


    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }

}

