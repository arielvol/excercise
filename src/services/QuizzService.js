import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const api = {
  getUser() {
    return apiClient.get('/user');
  },
  getQuestions(id) {
    return apiClient.get(`/questions/${id}`);
  },
  getCorrectAnswers(id) {
    return apiClient.get(`/correct_answers/${id}`);
  },
  getNumberOfQuestions() {
    return apiClient.get('/number_of_questions');
  }
};

export default api;