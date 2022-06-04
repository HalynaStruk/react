import React from 'react';

const Cat = ({cat}) => {
    return (
        <div>
            {cat.name}
            <button>save</button>
        </div>
    );
};

export {Cat};