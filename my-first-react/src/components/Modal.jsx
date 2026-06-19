import React, { useState, useEffect } from "react";

function Modal({ onAdd, onUpdate, editTask, isEditing }) {
  const [taskValue, setTaskValue] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [progress, setProgress] = useState("To Do");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTask) {
      setTaskValue(editTask.task || "");
      setPriority(editTask.priority || "Medium");
      setProgress(editTask.progress || "To Do");
      setError("");
    } else {
      setTaskValue("");
      setPriority("Medium");
      setProgress("To Do");
      setError("");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = taskValue.trim();

    if (value.length === 0) {
      setError("Tên task không được để trống!");
      return;
    }
    if (value.length > 100) {
      setError("Tên task không được vượt quá 100 ký tự!");
      return;
    }

    setError("");

    const taskPayload = {
      id: editTask ? editTask.id : Date.now(),
      task: value,
      priority,
      progress,
    };

    if (editTask && onUpdate) {
      onUpdate(taskPayload);
    } else if (onAdd) {
      onAdd(taskPayload);
    }

    setTaskValue("");
    setPriority("Medium");
    setProgress("To Do");

    const modalElement = document.getElementById("Mobangthemnhansu");
    if (modalElement && window.bootstrap) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement) || new window.bootstrap.Modal(modalElement);
      modalInstance.hide();
    }
  };

  return (
    <div className="modal fade" id="Mobangthemnhansu" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEditing ? "Edit task" : "Add task"}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="taskname" className="form-label">Task</label>
                <input
                  type="text"
                  className="form-control"
                  id="taskname"
                  placeholder="Type your task here"
                  value={taskValue}
                  onChange={(e) => setTaskValue(e.target.value)}
                />
                <span style={{ color: "red" }}>{error}</span>
              </div>

              <div className="mb-3">
                <label className="form-label">Priority</label>
                <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option>Hard</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Progress</label>
                <select className="form-select" value={progress} onChange={(e) => setProgress(e.target.value)}>
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>

              <button className="btn btn-primary" type="submit">{isEditing ? "Save" : "Add"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
