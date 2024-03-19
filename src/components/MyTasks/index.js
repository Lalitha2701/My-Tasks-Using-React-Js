import {Component} from 'react'
import {v4} from 'uuid'

import TaskItem from '../TaskItem'
import TaskReview from '../TaskReview'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskList: [],
    tagInput: '',
    optionId: tagsList[0].optionId,
  }

  onAddTask = event => {
    event.preventDefault()
    const {tagInput, optionId} = this.state
    const typeOption = tagsList.find(eachTag => eachTag.optionId === optionId)
    const {displayText} = typeOption

    const newTag = {
      id: v4(),
      tag: tagInput,
      type: displayText,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTag],
      tagInput: '',
      optionId: tagsList[0].optionId,
    }))
  }

  onChangeTask = event => {
    this.setState({tagInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {optionId, tagInput, taskList} = this.state

    let para
    if (taskList.length === 0) {
      para = <p className="no-task-para">No tasks Added Yet</p>
    } else {
      para = (
        <ul className="task-review-container">
          {taskList.map(each => (
            <TaskReview details={each} key={each.id} />
          ))}
        </ul>
      )
    }

    return (
      <div className="app-container">
        <div className="content-container-1">
          <h1 className="create-text">Create a task!</h1>
          <form onSubmit={this.onAddTask}>
            <div className="label-input-container">
              <label htmlFor="task" className="label-text">
                Task
              </label>
              <input
                type="text"
                placeholder="Enter the task here"
                id="task"
                className="input"
                onChange={this.onChangeTask}
                value={tagInput}
              />
            </div>
            <div className="label-input-container">
              <label className="label-text" htmlFor="select">
                Tags
              </label>
              <select
                type="select"
                id="select"
                className="tag-input"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {tagsList.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </form>
        </div>
        <div className="content-container-2">
          <h1 className="tags-text">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachTag => (
              <TaskItem key={eachTag.optionId} taskDetails={eachTag} />
            ))}
          </ul>
          <h1 className="task-text">Tasks</h1>
          {para}
        </div>
      </div>
    )
  }
}

export default MyTasks
