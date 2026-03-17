const fs = require("fs")
const path = require("path")

const filePath = path.join(process.cwd(), "task.json")
const timeStamp = new Date().toISOString()

//read
function readTask () {
  if(fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
  }
  return []
} 

//write
function writeTask (tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8")
}

// generating uniqueId and use deleted one too
function getNextId (tasks){
  const ids = tasks.map(task => task.id)
  let nextId = 1
    for(const id of ids){
      if(id !== nextId) {
        return nextId
      }
      nextId++ 
      }
      return nextId
    }

//add
function addTask () {
  const tasks = readTask()
  const newTask = {
    id: getNextId(tasks),
    description: "We are here for testing",
    status: "in-progress",
    createdAt: timeStamp
  }
  tasks.push(newTask)
  writeTask(tasks)
}

//update
function updateTask (id, description) {
  const tasks = readTask()
  const task = tasks.find(task => task.id === id)
  if(task){
     task.description = description,
     task.updatedAt = timeStamp
     writeTask(tasks)
  }
}

//delete
function deleteTask (id) {
  const tasks = readTask()
  const removeTask = tasks.filter(removeTask => removeTask.id !== id)
  writeTask(removeTask)
}

//Marking of Task - inProgress || Done || To-Do
function setStatus (id, status) {
  const tasks = readTask()
  const setStatus = tasks.find(task => task.id === id)
  if(setStatus){
    setStatus.status = status
    writeTask(tasks)
  }
}

// list all task
// list that are done
// list that are in progress