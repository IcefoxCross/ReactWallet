import axios from 'axios';
import { MAIN_URL } from '../../../constants/constants';

export const createTransaction = async (data) => {
  try {
    const response = await axios.post(
      `${MAIN_URL}transaction`,
      data
    );
    return response;
  } catch (err) {
    return console.log(err);
  }
};