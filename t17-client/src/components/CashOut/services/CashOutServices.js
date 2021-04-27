import axios from 'axios';
import { URL_MAIN } from '../../../constants/constants';

export const createTransaction = async (data) => {
  try {
    const response = await axios.post(
      `${URL_MAIN}transaction`,
      data
    );
    return response;
  } catch (err) {
    return console.log(err);
  }
};