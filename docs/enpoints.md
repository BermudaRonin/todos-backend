# Endpoints documentation

**User & Authentication**
  
| Endpoint                  | Method    | Operation                 |
|---------------------------|-----------|---------------------------|
| /users                    | POST      | Create a user             |
| /users/credentials        | POST      | Verify user credentials   |
| /users/token              | POST      | Verift user access token  |
| /users/:userID            | GET       | Get a single user         |
| /users/:userID            | PUT       | Update a user             |
| /users/:userID            | DELETE    | Delete a user             |

**Todo lists**
  
| Endpoint                  | Method    | Operation                 |
|---------------------------|-----------|---------------------------|
| /lists                    | POST      | Create a list             |
| /lists                    | GET       | Get lists                 |
| /lists/:listID            | GET       | Get a list                |
| /lists/:listID            | PUT       | Update a list             |
| /lists/:listID            | DELETE    | Delete a list             |


**Todos**
  
| Endpoint                  | Method    | Operation                 |
|---------------------------|-----------|---------------------------|
| /todos                    | POST      | Create a todo             |
| /todos                    | GET       | Get todos                 |
| /todos/:todoID            | GET       | Get a todo                |
| /todos/:todoID            | PUT       | Update a todo             |
| /todos/:todoID            | DELETE    | Delete a todo             |