import { GET_NEWS_BY_PAGE } from "../actions";


const initialState = {
  news:{
    page:0,
    content:[]
  }
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
      default:return {...state}
    }
  };
  
export default rootReducer;