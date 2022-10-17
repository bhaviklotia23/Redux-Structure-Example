// import axios from "axios";

// export const API_URL = process.env.REACT_APP_API_URL_LOGIN;

// interface AuthModel {
//   accessToken: string;
// }

// const getAuth = (): AuthModel | undefined => {
//   const auth: AuthModel = {
//     accessToken: ""
//   } as AuthModel;
//   return auth;
// };

// export const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json"
//   }
// });

// const setupAxios = (axios: any) => {
//   axios.defaults.headers.Accept = "application/json";
//   axios.interceptors.request.use(
//     (config : any) => {
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

// setupAxios(api);
