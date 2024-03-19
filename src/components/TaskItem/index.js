import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {displayText} = taskDetails

  return (
    <li className="task-item">
      <button type="button" className="tag-button">
        {displayText}
      </button>
    </li>
  )
}

export default TaskItem
