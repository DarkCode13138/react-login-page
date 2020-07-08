import React, {useState} from 'react';
import todo_1 from "../../images/todo-1.svg";
import todo_2 from "../../images/todo-2.svg";
import todo_3 from "../../images/todo-3.svg";
import todo_4 from "../../images/todo-4.svg";
import TODOELEM from "./TodoElem";



const TodoList = () => {

    const [elem] = useState([
        {
            content: 'Создавать аккаунты и рекламные кампании в системах Google и Яндекс',
            image:    todo_1,
        },
        {
            content: 'Пополнять рекламные аккаунты систем Google и Яндекс',
            image:   todo_2,
        },
        {
            content: 'Смотреть статистику рекламных кампаний',
            image:    todo_3,
        },
        {
            content: 'Формировать отчеты и получать официальные документы для ИП и юрлиц (договоры, счета, акты)',
            image:    todo_4,
        },

    ])

    return(
        <div className="b-iShack-todo b-iShack" id="b-iShack-todo">
            <div className="b-iShack-container">
                <h3>Что вы сможете делать в сервисе?</h3>
                <div className="b-iShack-todo-wrapp">
                    {elem.map((content, i) => (
                            <TODOELEM content={content} index={i} key={i}/>
                        )
                    )
                    }

                </div>
            </div>
        </div>



    )
}

export default TodoList;