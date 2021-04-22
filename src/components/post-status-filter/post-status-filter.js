import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btns-group">
            <button className="btn-filter btn-all">Все</button>
            <button className="btn-filter btn-like">Понравившиеся</button>
        </div>
    )
}

export default PostStatusFilter;