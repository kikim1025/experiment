import React from 'react';

const TabButton = (props) => (
    <span className={'button button--'+ props.dir}
        onClick={() => props.changeTab(props.des)}
    >
        {props.name}
    </span>
);

export default TabButton;