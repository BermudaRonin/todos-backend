[⟵ Back](../README.md)

<h2>Get user</h2>

Get authenticated user.

#### Request

<span>
    <span style="background:#1A56DB;color:white;padding:3px 6px;border-radius:4px;font-weight:bold;">GET</span>
    <span>/api/v1/users/me</span>
</span>
<br></br>

<details open>
<summary>Headers</summary>

```JSON
{
    "Authorization": "Bearer <ACCESS_TOKEN>",
}
```
</details>



#### Responses
<details open>
<summary >200</summary>

```JSON
{
    "success": true,
    "message": "User fetched!",
    "data": {
        "user" : {
            "id": "",
            "email": "",
            "createdAt" : "",
            "updatedAt" : ""
        },
    },
}
```
</details>