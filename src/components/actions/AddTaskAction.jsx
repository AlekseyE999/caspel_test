import { useState } from "react";
import ReactModal from "react-modal";
import "../../css/react-modal.css"

const AddTaskAction = ({ addTask, ...props }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const task =
    {
        name: null,
        date: null,
        someNumber: null,
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className="AddTaskAction">
            <button onClick={openModal} {...props}>
                Добавить
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div>
                <h2>Добавление</h2>

                    <hr/>
                    
                    <div>
                        <h3>Имя</h3>
                        <div>
                            <input onChange={e => task.name = e.target.value} className="border border-1 m-1"></input>
                        </div>

                        <h3>Дата</h3>
                        <div>
                            <input onChange={e => task.date =e.target.value} type="date"   className="border border-1 m-1"></input>
                        </div>

                        <h3>Число</h3>
                        <div>
                            <input onChange={e => task.someNumber = e.target.value} type="number" className="border border-1 m-1"></input>
                        </div>
                    </div>

                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => {if(addTask(task) !=false) closeModal(); else  alert("Ошибка отправки")}}>Добавить</button>
            </ReactModal>
        </div>
    );
}

export default AddTaskAction;