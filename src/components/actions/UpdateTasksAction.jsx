import React, { useState } from "react";
import ReactModal from "react-modal";

const UpdateTasksAction = ({updateTask, ...props }) => {

    const [showModal, setShowModal] = useState(false);

    const [update, setUpdate] = useState({});

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setUpdate({});
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

    console.log(update);

    return (
        <div className="AddTaskAction">
            <button onClick={openModal} {...props}>
                Изменить
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div>
                <h2>Изменение</h2>
                    <div>

                        <h3>Имя</h3>
                        <div>
                            <select value={update.name ?? ''} onChange={e => e.target.value ? setUpdate({...update, name: String(e.target.value)}) :
                                setUpdate({...update, name: undefined})} className="border border-1 m-1">
                            </select>
                        </div>

                        <h3> Дата</h3>
                        <div>
                            <input value={update.date?.toISOString()?.slice(0, 7) ?? ''} onChange={e => e.target.value ? setUpdate({...update, date: new Date(e.target.value)}) :
                                setUpdate({...update, date: undefined})} type="date" className="border border-1 m-1"></input>
                        </div>

                        <h3>Число</h3>
                        <div>
                            <input value={update.someNumber ?? ''} onChange={e => e.target.value ? setUpdate({...update, someNumber: Number(e.target.value)}) :
                                setUpdate({...update, someNumber: undefined})} type="number" className="border border-1 m-1"></input>
                        </div>

                    </div>

                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => updateTask(update) ? closeModal() :  alert("Ошибка отправки")}>Изменить</button>
            </ReactModal>
        </div>
    );
}

export default UpdateTasksAction;