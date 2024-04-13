import { 
  GET_NEWS_BY_PAGE, 
  GET_NEW_BY_ID,
  GET_NEWS_BY_CATEGORY,
  GET_CATEGORIES,
  CREATE_USER
} from "../actions";


const initialState = {
  news:{
    page:0,
    content:[]
  },
  newByIdData:{},
  newsByCatogory:{},
  categories:[],
  userToken:""
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_NEWS_BY_PAGE:
        return {
          ...state,
          news:{
            page: ["200","304"].includes(action.status)?state.news.page :(state.news.page + 1),
            content : action.payload
          }
        }
      case GET_NEW_BY_ID:
        return {
          ...state,
          newByIdData : action.payload
        }
      case GET_NEWS_BY_CATEGORY:
        if(action.payload.length){
          return {
            ...state,
            newsByCatogory: {
              ...state.newsByCatogory,
              [action.category] : action.payload
            }
          }
        }
        return {...state}
      case GET_CATEGORIES:
        return {
          ...state,
          categories:action.payload
        }
      case CREATE_USER:
        return {
          ...state,
          userToken: action.payload
        }
      default:return {...state}
    }
  };
  
export default rootReducer;