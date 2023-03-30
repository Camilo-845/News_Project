# **API NEWS**
### **_API Rest + MongoDB_**

News project backend for the management of users and news data.

## **Instalation:**
1. Clone the repository.
2. Install the dependencies with '**npm install**'.
3. Create the '**.env**' file with the necessary [enviroment variables](#env-enviroment-variables).

## **Use:**
Run the the server with the next command:
~~~sh
npm start
~~~
---
## **Routes:**
## New :
### `GET "/news"`:
Return a List of last news of all categories with request pagination.

**_Inputs_**:
- `page`: number of the page of news data

**_Outputs_**:
- `200 OK` -  with a JSON array containing the with maxumum 15 last news
- `400 Bad Request` - if the data is not valid
### `GET "/news/:id"`:
Return a JSON Object containng the new with the id provided. 

**_Inputs_**:
- `id`: parameter "id" of the new Model

**_Outputs_**:
- `200 OK` -  with a JSON Object containing the new data
- `400 Bad Request` - if the data is not valid
### `GET /news/category/:name`

Returns a list of news articles for a specific category.

__Inputs__:
- `name`: the name of the category to retrieve news articles for.
- `page` (optional): the page number of the news articles to retrieve (default: 1).

__Outputs__:
- `200 OK` with a JSON array containing up to 10 news articles for the category.
- `404 Not Found` if there are no news articles for the category.
- `500 Internal Server Error` if there is an internal server error.

### `POST /news/favorite`

Adds a news article to the user's favorites list.

__Inputs__:
- `token`: the user's access token in the request headers.
- `newId`: the ID of the news article to add to the user's favorites list.

__Outputs__:
- `201 Created` if the news article is added to the user's favorites list.
- `400 Bad Request` if the input data is invalid.
- `401 Unauthorized` if the user is not authenticated.
- `404 Not Found` if the news article does not exist.
- `500 Internal Server Error` if there is an internal server error.

### `GET /news/favorite`

Returns a list of the user's favorite news articles.

__Inputs__:
- `token`: the user's access token in the request headers.

__Outputs__:
- `200 OK` with a JSON array containing the user's favorite news articles.
- `401 Unauthorized` if the user is not authenticated.
- `404 Not Found` if there are no favorite news articles for the user.
- `500 Internal Server Error` if there is an internal server error.

### `POST /news/commentary`

Adds a commentary to a news article.

__Inputs__:
- `token`: the user's access token in the request headers.
- `newId`: the ID of the news article to add a commentary to.
- `comment`: the text of the commentary to add.

__Outputs__:
- `201 Created` if the commentary is successfully added to the news article.
- `400 Bad Request` if the input data is invalid.
- `401 Unauthorized` if the user is not authenticated.
- `404 Not Found` if the news article does not exist.
- `500 Internal Server Error` if there is an internal server error.
---
## Category:
### `GET /category`

Returns a list of all categories.

__Inputs__:
- None.

__Outputs__:
- `200 OK` with a JSON array containing all categories.
- `404 Not Found` if there are no categories.
- `500 Internal Server Error` if there is an internal server error.
---
## User:
### `POST /user/signup`

Registers a new user.

__Inputs__:
- `username` (string): the username of the user.
- `mail` (string): the email of the user.
- `password` (string): the password of the user.

__Outputs__:
- `200 OK` with a JSON object containing the message and the user information.
- `400 Bad Request` if the input is invalid.
- `409 Conflict` if the user already exists.
- `500 Internal Server Error` if there is an internal server error.


### `GET /user/login`

Logs in an existing user and returns a JWT token.

__Inputs__:
- `mail` (string): the email of the user.
- `password` (string): the password of the user.

__Outputs__:
- `200 OK` with a JSON object containing the JWT token and the expiration time.
- `400 Bad Request` if the input is invalid.
- `401 Unauthorized` if the user is not authorized.
- `500 Internal Server Error` if there is an internal server error.


### `GET /user/detail`

Returns the user information.

__Inputs__:
- `Authorization` (string): the JWT token obtained during login.

__Outputs__:
- `200 OK` with a JSON object containing the user information.
- `401 Unauthorized` if the user is not authorized.
- `500 Internal Server Error` if there is an internal server error.


### `PUT /user/update/password`

Updates the user password.

__Inputs__:
- `Authorization` (string): the JWT token obtained during login.
- `lastPassword` (string): the current password of the user.
- `newPassword` (string): the new password of the user.

__Outputs__:
- `200 OK` with a JSON object containing the message and the updated user information.
- `400 Bad Request` if the input is invalid.
- `401 Unauthorized` if the user is not authorized.
- `500 Internal Server Error` if there is an internal server error.


### `DELETE /user`

Deletes the user.

__Inputs__:
- `Authorization` (string): the JWT token obtained during login.

__Outputs__:
- `200 OK` with a JSON object containing the message.
- `401 Unauthorized` if the user is not authorized.
- `500 Internal Server Error` if there is an internal server error.


---
## NoSQL Database (MongoDB):
### _SQL refernece schema :_
![ImagenRealaciones](../documentation/diagrama/diagrama%20NewsProject.drawio%20(1).png)
### _Mongo Standard Connection :_
```
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```
---
## News data API: 
[Currents API] helps you solve this problem by curating the world news and provide them in a parsable way.

### Simple conection: 
```sh
url = "https://api.currentsapi.services/v1/latest-news?"
"language=us&" +
"apiKey=API_KEY"
```
### Return a JSON object example: 
```sh
{
    status: "[string]",
    news:[
        {
            id: "[string]",
            title: "[string]",
            description: "[string]",
            url: "[string]",
            author: "[string]",
            image: "[string]",
            lenguage: "[string]",
            category:[
                "[string]",
            ],
            published:"[string]"
        }
    ]
}
```
---
## __.env Enviroment Variables__:
- `DB_URI` : Mongo Standard Connection
- `NEWS_API_KEY` : [Currents API] key
- `PORT` : API listen port
- `JWT_KEY` : Secret hash key
---
## **AUTHOR:**
### Camilo Samiento  /  FullStack Developer  /   [LinkedIn] 

[LinkedIn]: https://www.linkedin.com/in/camilo-sarmiento-051a80244/
[Currents API]:https://currentsapi.services/en