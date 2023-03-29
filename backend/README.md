# **API NEWS**
### **_API Rest + MongoDB_**

News project backend for the management of users and news data.

## **Instalation:**
1. Clone the repository.
2. Install the dependencies with '**npm install**'.
3. Create the '**.env**' file with the necessary enviroment variables.

## **Use:**
Run the the server with the next command:
~~~sh
npm start
~~~
---
## **Routes:**
## New :
### `GET "/news":`
Return a List of last news of all categories with request pagination.

**_Inputs_**:
- `page:` number of the page of news data

**_Outputs_**:
- `200 OK` -  with a JSON array containing the with maxumum 15 last news
- `400 Bad Request` - if the data is not valid
### `GET "/news/:id":`
Return a JSON Object containng the new with the id provided. 

**_Inputs_**:
- `id:` parameter "id" of the new Model

**_Outputs_**:
- `200 OK` -  with a JSON Object containing the new data
- `400 Bad Request` - if the data is not valid
- GET "/news/category/:name": 
    > Request = { params : name , query : {page : number} }

    > Response = Array:[ { new }, { new }, { new }, ... ] ( max = 10 ) or [ ]
- POST "/news/favorite":
    >Request = { headers: token} , {query: {newId} }
- GET "/news/favorite":
    >Request = {headers : token}
    >Response = [ {new} , {new} , {new} , {new} , ... ]
- POST "/news/commentary":
    >Request = { headers : token } , { body : { newId : [String], comment : [String] } }
### Category:
- GET "/category":
    >Request = { }

    >Response = Array:[ {category} , {category} , {category} , ... ] or [ ]
### User:
- POST "/user/signup":
    >Request = { body: username, mail, password }

    >Response = { message:String , result: {user} }
- GET "/user/login": 
    >Request = { body: mail, password }

    >Response = {token: "", expiresIn: 86400}
- GET "/user/detail":
    >Request = {headers: token}

    >Response = {message: , response: {user}}
- PUT "/user/update/password" :
    >Request = {headers: token , body: lastPassword, newPassword}
    >Response = {message , result: {user}}
- DELETE "/user": 
    >Request = {headers: token}

## **AUTOR:**
> Camilo Samiento  /  FullStack Developer  /   [LinkedIn] 
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
[LinkedIn]: https://www.linkedin.com/in/camilo-sarmiento-051a80244/
[Currents API]:https://currentsapi.services/en