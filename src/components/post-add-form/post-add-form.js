import React, {Component} from 'react';
import './post-add-form.scss';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем вы сейчас думаете"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    className="btn btn-all"
                    type="submit"
                >
                    Добавить
                </button>
            </form>
        )
    }
}