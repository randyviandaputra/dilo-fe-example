import React, {useState} from 'react'

const AddTodo = props => {
  const [todo, setTodo] = useState('')

  const handleAddTodo = e => {
    props.onAdd(todo)
    setTodo('')
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Masukan Todo ..."
        value={todo}
        onChange={e => setTodo(e.target.value)}
        style={styles.textInput}
      />
      <button
        style={styles.btnCustom}
        type="submit"
        onClick={() => handleAddTodo()}
      >
        Add Todo
      </button>
    </div>
  )
}

const styles = {
  textInput: {
    height: '25px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
  btnCustom: {
    height: '35px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
    marginLeft: '5px',
    backgroundColor: '#ccc',
  },
}

export default AddTodo
