function Table({ prods, onDelete, onEdit }) {
  return (
    <>
      {prods.map((item, index) => (
        <div className="card p-3 mb-2 shadow-sm" key={index}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-1 fw-semibold">task</p>
              <p className="mb-1 fw-semibold">{item.task}</p>
            </div>

            <div>
              <small className="mb-1 fw-semibold">Priority:</small>
              <small className={`mb-1 fw-semibold ${
                item.priority.toLowerCase() === "hard"
                  ? "text-danger"
                  : item.priority.toLowerCase() === "medium"
                    ? "text-warning"
                    : "text-success"
              }`}>
                {item.priority}
              </small>
            </div>

            <span>{item.progress}</span>
            <div className="progress-circle" data-status={item.progress}></div>

            <div>
              <button className="btn btn-warning btn-sm ms-2" onClick={() => onEdit(item.id)}>Sửa</button>
              <button className="btn btn-danger btn-sm ms-1" onClick={() => onDelete(item.id)}>Xóa</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Table
