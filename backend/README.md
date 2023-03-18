# **API NEWS**
### **_API Rest + MongoDB_**

## Requests:
- GET_NEWS:
- GET_NEW_DETAIL: 
- GET_NEWS_BY_CATEGORY: 
- GET_CATEGORIES
- CREATE_USER
- DETAIL_USER: 
- SET_USER: 
- DELETE_USER: 
- GET_FAVORITES: 

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