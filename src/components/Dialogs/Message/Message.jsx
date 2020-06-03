import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.dialogs__message}>
            {props.message}
        </div>
    )
}

export default Message;