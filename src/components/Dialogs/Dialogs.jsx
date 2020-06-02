import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

let dialogsData = [
    { id: 1, name: "Alexa" },
    { id: 2, name: "Thomas" },
    { id: 3, name: "Jessi" },
    { id: 4, name: "Brad" },
    { id: 5, name: "Angel" },
    { id: 6, name: "Bessy" }
]

let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Whatsaaaaaaap?" }
]

const Message = (props) => {
    return (
        <div className={style.dialogs__message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs__list}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.dialogs__messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </section>
    )
}

export default Dialogs;