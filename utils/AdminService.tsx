// import axios from "axios";

// // export const API_URL = " http://143.244.170.168:7043/";
// export const API_URL = "http://192.168.1.15:7043";
// // export const API_URL = process.env.REACT_APP_API_URL_GENER;

// interface AuthModel {
//   accessToken: string;
// }

// const getAuth = (): AuthModel | undefined => {
//   const auth: AuthModel = {
//     accessToken: "",
//   } as AuthModel;
//   return auth;
// };

// export const  apiAuth = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const setupAxios = (axios: any) => {
//   axios.defaults.headers.Accept = "application/json";
//   axios.interceptors.request.use(
//     (config: any) => {
//       const auth = getAuth();
//       if (auth) {
//         config.headers.Authorization = `Bearer ${auth.accessToken}`;
//       }
//       if (config?.urlParams && typeof config?.url?.replace === "function") {
//         Object.entries(config.urlParams || {}).forEach(([key, value]) => {
//           config.url = config.url.replace(`:${key}`, value); // encodeURIComponent()
//         });
//       }
//       return config;
//     },
//     (err: any) => Promise.reject(err)
//   );
// };

// setupAxios(apiAuth);
