import './index.css'

const TaskReview = props => {
  const {details} = props
  const {tag, type} = details
  return (
    <li className="review">
      <div className="review-container">
        <h1 className="tag">{tag}</h1>
        <div className="type-container">
          <p className="type">{type}</p>
        </div>
      </div>
    </li>
  )
}

export default TaskReview
