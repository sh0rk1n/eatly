import axios from "axios";

const API_URL = "https://38c1ebb3ae3f556c.mokky.dev/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    const userData = response.data[0].users;
    return userData;
  } catch (err) {
    console.warn("Ошибка загрузки пользователей:", err);
    throw err;
  }
};
