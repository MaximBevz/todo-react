import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы сейчас думаете"
                className="form-control new-post-label"
            />
            <button className="btn btn-all">
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;