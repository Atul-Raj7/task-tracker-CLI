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
    completed: false,
    inProgress: false,
    createdAt: timeStamp,
    updatedAt: timeStamp
  }
  tasks.push(newTask)
  writeTask(tasks)
}

//update
//delete
//mark of progress and done
// list all task
// list that are done
// list that are in progress