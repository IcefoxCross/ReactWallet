import { httpPost } from '../../../services/httpServices';

export const createTransaction = async (data) => {
  try {
    const response = await httpPost('transaction', data)
    return response;
  } catch (err) {
    return console.log(err);
  }
};