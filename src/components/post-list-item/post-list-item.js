import React, {Component} from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;

        let classNames = 'app-list-item';
        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
            <span onDoubleClick={onToggleLike} className="app-list-item-label">
                {label}
            </span>
                <div className="btns-group">
                    <button
                        className="btn btn-star"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        className="btn btn-trash"
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}