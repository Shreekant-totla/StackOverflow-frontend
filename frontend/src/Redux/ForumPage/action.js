import axios from 'axios';
import {
  FETCH_QUESTIONS_SUCCESS,
  ADD_QUESTION_SUCCESS,
  DELETE_QUESTION_SUCCESS,
} from './actionTypes';

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const addQuestionSuccess = (question) => ({
  type: ADD_QUESTION_SUCCESS,
  payload: question,
});

export const deleteQuestionSuccess = (questionId) => ({
  type: DELETE_QUESTION_SUCCESS,
  payload: questionId,
});

export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get('https://stackoverflow-grwx.onrender.com/forum');
    dispatch(fetchQuestionsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

export const addQuestion = (questionData) => async (dispatch) => {
  try {
    const response = await axios.post('https://stackoverflow-grwx.onrender.com/forum', questionData);
    dispatch(addQuestionSuccess(response.data));
  } catch (error) {
    console.error('Error adding question:', error);
  }
};

export const deleteQuestion = (questionId) => async (dispatch) => {
  try {
    await axios.delete(`https://stackoverflow-grwx.onrender.com/forum/${questionId}`);
    dispatch(deleteQuestionSuccess(questionId));
  } catch (error) {
    console.error('Error deleting question:', error);
  }
};
