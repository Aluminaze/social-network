import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsItems = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id} />)
    let messageItems = props.messagesData.map(msg => <Message message={msg.message} />)

    let newMessageElement = React.createRef();

    let sentNewMessage = () => {
        let text = newMessageElement.current.value;

        if(text) {
            alert(text);
        }
    }

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs__list}>
                {dialogsItems}
            </div>
            <div className={style.dialogs__messages}>
                <div className={style.dialogs__messages__list}>
                    {messageItems}
                </div>
                <div className={style.newMessage__form}>
                    <textarea ref={newMessageElement} className={style.newMessage__form__text} placeholder="New message..."></textarea>
                    <button onClick={ sentNewMessage } className={style.newMessage__form__button}>Sent</button>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;