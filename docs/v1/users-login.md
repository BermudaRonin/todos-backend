[⟵ Back](../README.md)

<h2>User login</h2>

Validate user credentials and generate a token.

#### Request

<span>
    <span style="background:#046C4E;color:white;padding:3px 6px;border-radius:4px;font-weight:bold;">POST</span>
    <span>/api/v1/users/login</span>
</span>
<br></br>

<details open>
<summary>Body</summary>

```JSON
// Option 1
{
    "email": "", // required
    "password": "", // required
}
// Option 2
{
    "username": "", // required
    "password": "", // required
}
```
</details>



#### Responses
<details open>
<summary>200</summary>

```JSON
{
    "success": true,
    "message": "User validated and authenticated!",
    "data": {
        "acceesToken": "",
        "user" : {
            "id": "",
            "email": "",
            "username" : "",
            "createdAt" : "",
            "updatedAt" : ""
        }
    },
}
```
</details>