import axios from "axios";

///`${API_URL}/todo`
// https://github.com/mockapi-io/docs/wiki/Quick-start-guide
// API_URL mockapi.io
const API_BASE_URL = "https://6470cdec3de51400f724f4d3.mockapi.io/api";

const ReserveServiceRest = {
  getAllReserves: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reserve`);
      // console.log("retrieving todos:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving todos:", error);
      throw error;
    }
  },

  createReserve: async (todo) => {
    console.log(todo);
    try {
      const response = await axios.post(`${API_BASE_URL}/reserve`, todo);
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  },

  updateReserve: async (todo) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/reserve/${todo.id}`,
        todo
      );
      return response.data;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  },

  deleteReserve: async (todoId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/reserve/${todoId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }
};

export default ReserveServiceRest;
