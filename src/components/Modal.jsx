import React from 'react';

const Modal = ({ isModalOpen, getTodoId, todos, closeModal, editTodo }) => {
  const updateDescription = () => {
    editTodo(
      getTodoId(),
      todo.title,
      document.getElementById('input-box').value
    );
  };

  let todo = todos.filter((todo) => {
    if (todo.id === getTodoId()) return todo;
  });

  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="modal-box">
      <div className="modal-content">
        <h4 className="modal-title">Edit Todo</h4>
        <div className="modal-body">
          <input type="text" id="input-box" />
        </div>
        <div className="modal-btns">
          <button onClick={updateDescription} className="btn-save">
            Save
          </button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
