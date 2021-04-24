import React, {Component} from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = (e) => {
            const term = e.target.value;
            this.setState({term});
            this.props.onUpdateSearch(term);
        }
    }
    render() {
        const holderText = "Поиск по записям"
        return (
            <input
                type="text"
                className="search-input"
                placeholder={holderText}
                onChange={this.onUpdateSearch}
            />
        )
    }
}