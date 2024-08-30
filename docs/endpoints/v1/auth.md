# Authentication endpoints

## Register

**`POST /auth/register`**

Create a new user and generate a token.

**Request Body**

```JSON
{
    "email": "",
    "password": "",
}
```

**Response**

```JSON
{
    "success": true,
    "message": "User authenticated!",
    "body": {
        "user" : {
            "id": "",
            "email": "",
        },
        "acceesToken": ""
    },
}
```
## Login

**`POST /auth/login`**

Get user credentials and generate a token.

**Request Body**

```JSON
{
    "email": "",
    "password": "",
}
```

**Response**

```JSON
{
    "success": true,
    "message": "User created!",
    "data": {
        "user" : {
            "id": "",
            "email": "",
        },
        "acceesToken": ""
    },
}
```

## Get authenticated user

**`GET /auth/me`**

Get authenticated user.

**Request Headers**

```JSON
{
    ...
    "Authorization": "Bearer <ACCESS-TOKEN>",
}
```

**Response**

```JSON
{
    "success": true,
    "message": "User fetched!",
    "data": {
        "user" : {
            "id": "",
            "email": "",
        },
    },
}
```