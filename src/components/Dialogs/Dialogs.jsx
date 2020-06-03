import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsItems = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id} />)
    let messageItems = props.messagesData.map(msg => <Message message={msg.message} />)

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