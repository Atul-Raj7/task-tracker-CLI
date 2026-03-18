const { time, log } = require("console")
const fs = require("fs")
const path = require("path")

const filePath = path.join(process.cwd(), "task.json")
const timeStamp = new Date().toISOString()

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m"
};

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
  tasks.sort((a,b) => a.id - b.id)
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8")

}

// generating uniqueId and use deleted one too
function getNextId (tasks){
  const ids = tasks.map(task => task.id)
  ids.sort((a,b) => a - b)
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
function addTask (description) {
  const tasks = readTask()
  const newTask = {
    id: getNextId(tasks),
    description: description,
    status: "in-progress",
    createdAt: timeStamp
  }
  tasks.push(newTask)
  writeTask(tasks)
  console.log(`${colors.green}Task Added Successsfully.\n${colors.blue}ID: ${newTask.id}${colors.reset}`)
}

//update
function updateTask (id, description) {
  const tasks = readTask()
  const updatingTask = tasks.find(task => task.id === id)
  if(updatingTask){
    updatingTask.description = description,
    updatingTask.updatedAt = timeStamp
     writeTask(tasks)
     console.log(`${colors.green}Task Updated Successsfully.\n${colors.blue}${JSON.stringify(updatingTask, null, 2)}${colors.reset}`)
  }
}

//delete
function deleteTask (id) {
  const tasks = readTask()
  const removeTask = tasks.filter(removeTask => removeTask.id !== id)
  writeTask(removeTask)
  console.log(`${colors.red}Task Deleted Successsfully.\n${colors.blue}${colors.reset}`)
}

//Marking of Task - inProgress || Done || To-Do
function setStatus (id, status) {
  const tasks = readTask()
  const setStatus = tasks.find(task => task.id === id)
  if(setStatus){
    setStatus.status = status
    setStatus.updatedAt = timeStamp
    writeTask(tasks)
  }
}

// list
function list (filter){
  const tasks = readTask()
  // list that are todo
  if(filter === "todo"){
    console.log(tasks.filter(task => task.status === filter))
  } 
  // list that are done
  else if(filter === "done"){
    console.log(tasks.filter(task => task.status === filter))
  }
  // list that are in progress
  else if(filter === "in-progress"){
    console.log(tasks.filter(task => task.status === filter))
  } 
  // list all task
  else if(filter === undefined){
    console.log(tasks)
  }
}

// CLI Logic 
const args = process.argv.slice(2)

if(args[0] === "add"){
  const description = args.slice(1).join(" ")

  if(!description){
    console.log(`${colors.blue}Please provide a Description to Add. \n ${colors.yellow}Example ---> node index.js add "Hello World!"${colors.reset}`)
  }
  else{
    addTask(description)
  }
}

else if(args[0] === "update"){
  const id = parseInt(args.slice(1, 2).join(" "))
  const description = args.slice(2).join(" ")
  if(!id && !description){
    console.log(`${colors.blue}Please provide an ID & Description to Update. \n ${colors.yellow}Example ---> node index.js update 2 "Update Your Orb"${colors.reset}`)
  }
  else{
    updateTask(id, description)
  }
}

else if(args[0] === "delete"){
  const id = parseInt(args.slice(1).join(" "))
  if(!id){
    console.log(`${colors.blue}Please provide an ID to Delete \n ${colors.yellow}Example ---> node index.js delete 2${colors.reset}`)
  }
  else{
    deleteTask(id)
  }
}

else if(args[0] === "list" && args[1] === "todo"){
  const type = args.slice(1).join(" ")
  list(type)
}
else if(args[0] === "list" && args[1] === "in-progress"){
  const type = args.slice(1).join(" ")
  list(type)
}
else if(args[0] === "list" && args[1] === "done"){
  const type = args.slice(1).join(" ")
  list(type)
}
else if(args[0] === "list"){
  list()
}
