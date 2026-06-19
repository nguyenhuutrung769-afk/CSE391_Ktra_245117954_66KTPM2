import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import '../../css/bootstrap.min.css'
import '../../js/bootstrap.bundle.js'
import Modal from './components/modal.jsx'
import data from "./data/data.json"
import Table from './components/table.jsx'

function App() {
  const [prods, setProds] = useState(data)
  const [editItem, setEditItem] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = (id) => {
    setProds((current) => current.filter((task) => task.id !== id))
  }

  const handleEdit = (id) => {
    const found = prods.find((task) => task.id === id)
    if (!found) return
    setEditItem(found)
    setIsEditing(true)
    const modalEl = document.getElementById("Mobangthemnhansu")
    if (window.bootstrap && modalEl) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl)
      modal.show()
    }
  }

  const handleAdd = (newProd) => {
    setProds((current) => [newProd, ...current])
    setEditItem(null)
    setIsEditing(false)
  }

  const handleUpdate = (updatedTask) => {
    setProds((current) =>
      current.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
    setEditItem(null)
    setIsEditing(false)
  }

  return (
    <main className="pt-3">
      <div className="container">
        <div className="d-flex justify-content-between pb-3">
          <h4>task list</h4>
          <div className="d-flex align-items-center gap-2">
            <Modal
              editTask={editItem}
              isEditing={isEditing}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
            />
            <button
              type="button"
              className="btn btn-primary text-end"
              data-bs-toggle="modal"
              data-bs-target="#Mobangthemnhansu"
              onClick={() => {
                setEditItem(null)
                setIsEditing(false)
              }}
            >
              + add task
            </button>
          </div>
        </div>
        <Table prods={prods} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </main>
  )
}

export default App
