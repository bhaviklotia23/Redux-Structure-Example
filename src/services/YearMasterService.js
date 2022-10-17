import { apiAuth } from "utils/AdminService";
import { endpoints } from "utils/Api";

// export const yearMasterData = () => {
//   try {
//     const API = apiAuth.get(endpoints?.GET_YEAR_MASTER_LIST);
//     return API;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const yearMasterData = async () => {
  try {
    const response = await apiAuth.get(endpoints?.GET_YEAR_MASTER_LIST);
    return response
  } catch (error) {
    throw Error(error);
  }
};
