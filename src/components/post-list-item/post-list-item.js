import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = () => {
            this.setState(({important}) => ({
                important: !important
            }))
        }
        this.onLike = () => {
            this.setState(({like}) => ({
                like: !like
            }))
        }
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item';
        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
            <span onDoubleClick={this.onLike} className="app-list-item-label">
                {label}
            </span>
                <div className="btns-group">
                    <button
                        className="btn btn-star"
                        onClick={this.onImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn btn-trash">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}