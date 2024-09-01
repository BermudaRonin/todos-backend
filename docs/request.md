[⟵ Back](./README.md)

# Request

### URL

The URL is composed of 

BASE_URL + `/api` + VERSION + ENDPOINT

example : `http://localhost:3000/api/v1/products` 


### Methods

Supported methods so far are : `GET`, `POST`


### Headers

Authorization header is mandatory for each request, except `/users/login` and `/users/register`


```JSON
{
    "Authorization": "Bearer <ACCESS_TOKEN>"
}
```

### Body

Body must be sent in JSON format, an example will be included with each endpoint.


