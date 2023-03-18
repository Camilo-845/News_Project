# **API NEWS**
### **_API Rest + MongoDB_**

## Requests:
- GET_NEWS ( "/new" ) :
- GET_NEW_DETAIL ( "/new/id" ) : 
- GET_NEWS_BY_CATEGORY ( "/new/category" ) : 
- GET_CATEGORIES ( "/category" ) :
- CREATE_USER ( "/user" ) :
- DETAIL_USER ( "/user" ) : 
- SET_USER ( "/user ") : 
- DELETE_USER ( "/user" ) : 
- GET_FAVORITES ( "/user" ) : 

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
"apiKey=API_KEY";
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

[Currents API]:https://currentsapi.services/en