[⟵ Back](../README.md)

# Login

Validate user credentials and generate a token.
  
## Request

**`POST`** `/users/login` (public)

#### Body

Option 1 : `email` and `password`.

```JSON
{
    "email": "", // required
    "password": "", // required
}
```

Option 2 : `username` and `password`.

```JSON
{
    "username": "", // required
    "password": "", // required
}
```
## Response 

#### 200 - Success 👍

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

- Option 1 : Invalid `email` or `password`.
- Option 2 : Invalid `username` or `password`.

#### 404 - Not found

- Option 1 : `email` non existing in database.
- Option 2 : `username` non existing in database.

#### 500 - Unexcpected Error

- Incorrect `password` .
- Other errors.

