import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (err) {
    console.log('Error while calling addUSer api', err);
  }
};

export const getUSers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (err) {
    console.log('Error while calling getUsers API', err);
  }
};

export const getUSer = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (err) {
    console.log('Error while calling getUsers API', err);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (err) {
    console.log('Error while calling edituser', err);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (err) {
    console.log('Error while calling deleteUSer api', err);
  }
};
