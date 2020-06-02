import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs__list}>
                <div className={style.dialogs__item}>
                    Alex
                </div>
                <div className={`${style.dialogs__item} ${style.dialogs__active}`}>
                    Thomas
                </div>
                <div className={style.dialogs__item}>
                    Jessi
                </div>
                <div className={style.dialogs__item}>
                    Brad
                </div>
                <div className={style.dialogs__item}>
                    Angel
                </div>
                <div className={style.dialogs__item}>
                    Bessy
                </div>
            </div>
            <div className={style.dialogs__messages}>
                <div className={style.dialogs__message}>
                    Hey!
                </div>
                <div className={style.dialogs__message}>
                    Whatsaaaaaaap?
                </div>
            </div>
        </section>
    )
}

export default Dialogs;