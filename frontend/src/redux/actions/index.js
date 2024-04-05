export const BACKEND_URL="http://localhost:3001/"

export const GET_NEWS_BY_PAGE = "GET_NEWS_BY_PAGE"

//Actions: 
export const getNewsByPage = (page)=>{
    return function(dispatch){
        return fetch(`${BACKEND_URL}news?page=${typeof(page) != "number"? 0 : page}`)
        .then((response)=>["200","304"].includes(response.status) ? [] : response.json())
        .then(data=>{
            dispatch({type:GET_NEWS_BY_PAGE, payload: data, status: data.status})
        })
    }
}
//News:
    //Get News by page
    //Get News by Id
    //Get News by Category
    //Post Favorite New
    //Get Favorites News
    //Post Comment
//Categories:
    //Get Categories
//User:
    //Create User
    //LogIn User
    //Get User Detail
    //Update Uesr Password
    //DeleteUser