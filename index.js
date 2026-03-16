const fs = require("fs")
const path = require("path")

const filePath = path.join(process.cwd(), "task.json")

//read
function readTask () {
  if(fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
  }
  return []
}

//add

//update
//delete
//mark of progress and done
// list all task
// list that are done
// list that are in progress