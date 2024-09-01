[⟵ Back](../README.md)

# Register

Creates a user and generate an access token.

## Request 

**`POST`** `/users/register` (public)

#### Body

```JSON
{
    "username": "", // required
    "email": "", // required
    "password": "", // required
}
```
## Response 

#### 201 - Success 👍

```JSON
"data" : {
    "acceesToken": "",
    "user" : {
        "id": "",
        "email": "",
        "username" : "",
        "createdAt" : "",
        "updatedAt" : ""
    }
}
```

#### 400 - Validation Error

- Invalid `username` or  `email` or `password`.

#### 409 - Duplicate Error

- Duplicate `username` or `email`.

#### 500 - Unexcpected Error

- Database error
- Server error
- Other error

