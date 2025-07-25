import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import updateIcon from "../../img/update-logo.png"

const UpdateTasksAction = ({updateTask, index, task, ...props}) => {

    const [showModal, setShowModal] = useState(false);

    const [update, setUpdate] = useState(task);

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {

        setUpdate(task)

    }, [showModal]);

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
            <button  width="20%" height="20%" onClick={openModal}{...props}>
                    <img src={updateIcon} width="20%" height="20%"/>
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div>
                <h2>Изменение</h2>
                    <div>

                        <hr/>

                        <h3>Имя</h3>
                        <div>
                            <input value={update.name ?? ""} onChange={e => e.target.value ? setUpdate({...update, name: String(e.target.value)}) :
                                setUpdate({...update, name: undefined})} className="border border-1 m-1">
                            </input>
                        </div>

                        <h3> Дата</h3>
                        <div>
                            <input value={update.date ?? ""} onChange={e => e.target.value ? setUpdate({...update, date: e.target.value}) :
                                setUpdate({...update, date: undefined})} type="date" className="border border-1 m-1"></input>
                        </div>

                        <h3>Число</h3>
                        <div>
                            <input value={update.someNumber ?? ""} onChange={e => e.target.value ? setUpdate({...update, someNumber: Number(e.target.value)}) :
                                setUpdate({...update, someNumber: undefined})} type="number" className="border border-1 m-1"></input>
                        </div>

                    </div>

                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => { if(updateTask(update, index) !=false) closeModal(); else  alert("Ошибка обновления")}}>Изменить</button>
            </ReactModal>
        </div>
    );
}

export default UpdateTasksAction;