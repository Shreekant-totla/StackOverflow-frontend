import {
    FETCH_QUESTIONS_SUCCESS,
    ADD_QUESTION_SUCCESS,
    DELETE_QUESTION_SUCCESS,
  } from './actionTypes';
  
  const initialState = {
    questions: [],
  };
  
  const forumReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUESTIONS_SUCCESS:
        return { ...state, questions: action.payload };
      case ADD_QUESTION_SUCCESS:
        return { ...state, questions: [...state.questions, action.payload] };
      case DELETE_QUESTION_SUCCESS:
        return {
          ...state,
          questions: state.questions.filter(
            (question) => question.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default forumReducer;
  