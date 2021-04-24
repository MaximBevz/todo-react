import React, {Component} from 'react';
import './post-status-filter.scss';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.btns = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравившиеся'}
        ]
    }

    render() {
        const btns = this.btns.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'active': '';

            return <button
                key={name}
                className={`btn-filter btn-all ${clazz}`}
                onClick={() => this.props.onFilterSelect(name)}
            >{label}</button>
        })
        return (
            <div className="btns-group">
                {btns}
            </div>
        )
    }
}