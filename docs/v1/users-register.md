[⟵ Back](../README.md)

<h2>User registration</h2>

Create a user and generates a token.

#### Request

<span>
    <span style="background:#046C4E;color:white;padding:3px 6px;border-radius:4px;font-weight:bold;">POST</span>
    <span>/api/v1/users/register</span>
</span>
<br></br>

<details open>
<summary>Body</summary>

```JSON
{
    "email": "",
    "password": "",
}
```
</details>



#### Responses
<details open>
<summary>200</summary>

```JSON
{
    "success": true,
    "message": "User created and authenticated!",
    "data": {
        "acceesToken": "",
        "user" : {
            "id": "",
            "email": "",
            "createdAt" : "",
            "updatedAt" : ""
        }
    },
}
```
</details>