1. [ ] create a login page for the user
2. [ ] list completed task and incompleted tasks
3. [ ] Tasks can be edited, deleted, and created (icons for each)
4. [ ] user can also be created, deleted and edited 
5. [ ] user can logged out

## model and columns needed

users - email, password, firstname, lastname
tasks - userid, task name, status, timestamps

# apis

## users 
user/create
profile/edit
profile/delete
profile/view

## tasks
task/create
task/edit/:id 
task/delete/:id
tasks/:status (completed)
tasks/:status (incompleted)



