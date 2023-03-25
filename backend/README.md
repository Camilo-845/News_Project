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

## **Routes:**
- GET "/news":
    > request = { query : { page : number } }

    > reponse = Array: [ { new }, { new }, { new }, ... ] ( max = 15 ) or [ ]
- GET "/news/:id":
    > request = { params = id }

    > response = Object: { new } or null
- GET "/news/category/:name": 
    > request = { params : name , query : {page : number} }

    > response = Array:[ { new }, { new }, { new }, ... ] ( max = 10 ) or [ ]
- GET "/category":
    >request = { }

    >response = Array:[ {category} , {category} , {category} , ... ] or [ ]
- POST "/user/login":
    >request = { body: username, mail, password }

    >response = { message:String , result: {user} }
- GET "/user": 
- PUT "/user" : 
- DELETE "/user": 
- GET "/user/favorites": 

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