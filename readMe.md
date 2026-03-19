<h1 align="center">Task Tracker CLI</h1>


A "SIMPLE" task tracker command-line application cooked using JavaScript

## Installation:
Prerequisites:

- [Nodejs](https://nodejs.org/en/download) v24.14.0


<br>

Make a separate folder and open terminal on the same path as folder location and run this 👇  

```bash 
git clone https://github.com/Atul-Raj7/task-tracker-CLI.git
```


**OR**


Download ZIP file & extract it at desired location or same as folder location


[Link](https://github.com/Atul-Raj7/task-tracker-CLI/archive/refs/heads/main.zip) 

> Note: You can click the Code button and select Download ZIP. Both links are same.


## Quick Start Guide
#### Type of tasks:
- `add` description
- `update` id description
- `delete` id 
- `list`  
- `list` todo 
- `list` in-progress
- `list` done

| Argument | Data Type 
| :--- | :----: 
| id | Number 
| description | String 

>Note: "todo", "in-progress", "done" are types of list not arguments, to be written as it is

<br>
Run the application 

`node index.js argument1 argument2`


>argument1 = Type of task

>argument2 = Argument of task type (id, description)

## Execution Instructions

### Adding a new task 
```bash
node index.js add "Buy groceries"
```

> Output: Task added successfully (ID: 1)
---
### Updating and deleting tasks
```bash
node index.js update 1 "Buy groceries and cook dinner"
``` 
```bash 
node index.js delete 1
```
---
### Marking a task as in progress or done
```bash
node index.js mark 1 in-progress
```
```bash
node index.js mark 1 done
```
---
### Listing all tasks
```bash
node index.js list
```
---
### Listing tasks by status
```bash
node index.js list done
```
```bash
node index.js list todo
```
```bash
node index.js list in-progress
```
---

<br>
<br>
<br>
<br>

<p align="center">
Pssst! If you scrolled this far, consider ⭐ star this project (●'◡'●) 
Oh I forgot who would ever want to run a task tracker in cli 😆
</p>

<img src="https://github.com/user-attachments/assets/1252a208-66ed-498a-91d8-3382abeb7c69" width="100%" alt="Vaporwave">
