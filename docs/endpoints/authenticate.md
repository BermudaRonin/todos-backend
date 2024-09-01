[⟵ Back](../README.md)

# Login

Get the authenticated user's data. Can be usefull to verify the validity of the access token.
  
## Request

**`GET`** `/users/me` (private)


## Response 

#### 200 - Success

```JSON
{
    "user" : {
        "id": "",
        "email": "",
        "username" : "",
        "createdAt" : "",
        "updatedAt" : ""
    }
}
```

#### 403 - Unauthorized

- Authorization header is missing/invalid. 
- Access token is expired/invalid.
- No user match in the database.

#### 500 - Unexcpected Error

- Other errors.

