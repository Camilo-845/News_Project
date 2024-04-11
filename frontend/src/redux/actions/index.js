export const BACKEND_URL="http://localhost:3001/"

export const GET_NEWS_BY_PAGE = "GET_NEWS_BY_PAGE"
export const GET_NEW_BY_ID = "GET_NEW_BY_ID"
export const GET_NEWS_BY_CATEGORY = "GET_NEWS_BY_CATEGORY"
export const GET_CATEGORIES = "GET_CATEGORIES"

//Actions: 
//News:
export const getNewsByPage = (page)=>{
    return function(dispatch){
        return fetch(`${BACKEND_URL}news?page=${typeof(page) != "number"? 0 : page}`)
        .then((response)=>["200","304"].includes(response.status) ? [] : response.json())
        .then(data=>{
            dispatch({type:GET_NEWS_BY_PAGE, payload: data, status: data.status})
        })
    }
}
export const getNewById = (id)=>{
    return function(dispatch){
        return fetch(`${BACKEND_URL}news/${id}`)
        .then((response)=>["200","304"].includes(response.status) ? [] : response.json())
        .then(data=>{
            dispatch({type:GET_NEW_BY_ID, payload: data})
        })
    }
}
export const getNewsByCategory = (category) =>{
    return function(dispatch){
        return fetch(`${BACKEND_URL}news/category/${category}`)
        .then((response)=>["200","304"].includes(response.status) ? [] : response.json())
        .then(data=>{
            dispatch({type:GET_NEWS_BY_CATEGORY, payload: data, category: category})
        })
    }
}
    //Post Favorite New
    //Get Favorites News
    //Post Comment
//Categories:
export const getCategories = ()=>{
    return function(dispatch){
        return fetch(`${BACKEND_URL}categories`)
        .then((response)=>["200","304"].includes(response.status) ? [] : response.json())
        .then(data=>{
            dispatch({type:GET_CATEGORIES, payload: data})
        })
    }
}
    //Get Categories
//User:
    //Create User
    //LogIn User
    //Get User Detail
    //Update Uesr Password
    //DeleteUser