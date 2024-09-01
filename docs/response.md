[⟵ Back](./README.md)

# Response

### Status code

#### Success

##### `200` - Success

##### `201` - Creation Success

#### Error

##### `400` - Validation

##### `403` - Unauthorized

##### `404` - Not found

##### `409` - Duplicates

##### `500` - Other errors

### Body

The response body is semantic, it has the same format over successful and error responses.

```JSON
{
    "success": true || false,
    "message": "...",
    "data" : {} || null, 
}
```

#### Success

```JSON
{
    "success": true,
    "message": "Product deleted successfuly!",
    "data" : null, 
}
```

```JSON
// with additional data
{
    "success": true,
    "message": "User fetched successfuly!",
    "data" : {
        "user" : {}
    }, 
}
```

#### Error

```JSON
{
    "success": false,
    "message": "Unauthorized user!",
    "data" : null, 
}
```
```JSON
// with additional data
{
    "success": false,
    "message": "Invalid password!",
    "data" : {
        "field" : "password"
    }, 
}
```