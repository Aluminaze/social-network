import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
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
    
    let dialogsItems = dialogsData.map(item => <DialogItem name={item.name} id={item.id} />)
    let messageItems = messagesData.map(msg => <Message message={msg.message} />)

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs__list}>
                {dialogsItems}
            </div>
            <div className={style.dialogs__messages}>
                {messageItems}
            </div>
        </section>
    )
}

export default Dialogs;