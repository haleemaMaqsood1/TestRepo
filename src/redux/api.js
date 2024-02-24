import axios from "axios";
import { BASE_URL } from "../../constant";
import { store } from "../Store";
const { dispatch, getState } = store;
import { Alert, BackHandler, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const headerKeys = {
    AccessToken: "Authorization",
    Expiry: "expiry",
    TokenType: "token-type",
    Uid: "uid",
    Client: "client",
    ContentType: "Content-Type",
  };
  // alert(JSON.stringify(userToken))

  let failedQueue = [];
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = getApiHeaders();
      // alert(JSON.stringify(token))

    //   console.log("headers", config.headers, token);
    if (config.headers && token) {
      console.log("Application/json");
      config.headers[headerKeys.AccessToken] = "Bearer " + token;
      config.headers[headerKeys.ContentType] = "multipart/form-data";
    } else if (!token) {
      // console.log("Multipart form data");
      config.headers[headerKeys.ContentType] = "multipart/form-data";
    }
    return config;
  });
  api.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      // failedQueue.push(new Promise((resolve, reject) => resolve(api)));
  
      if (error?.message == "Network Error") {
        if (Platform.OS == "ios") {
          Alert.alert("Internal server error");
        } else {
          Alert.alert(
            "Internal server error",
            "There is some internal server error",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "Close App", onPress: () => BackHandler.exitApp() },
            ]
          );
        }
      }
      console.log("error---", error);
      if (error.response) {
        console.log("error==>", error.response);
        if (error.response?.data?.message == "Unauthenticated.") {
          alert(
            translation?.languageSlice?.langaugeStrings?.translation
              ?.session_expired
          );
          dispatch(userToken(""));
        }
        if (error?.response?.status == 500) {
          if (Platform.OS == "ios") {
            Alert.alert("Internal server error");
          } else {
            Alert.alert(
              "Internal server error",
              "There is some internal server error",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Close App", onPress: () => BackHandler.exitApp() },
              ]
            );
          }
        }
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
      } else {
        // Something happened in setting up the request that triggered an Error
      }
      // return Promise.reject(error);
      return Promise.reject(error);
    }
  );
  function getApiHeaders() {
    //   console.log("store.getState()", store.getState().userDataReducer);
//     const userToken = useSelector((state) => state.userDataSlice.userToken);
// alert(JSON.stringify(store.getState().userDataSlice?.userToken))
    return store.getState().userDataSlice?.userToken;
  }
  function isTokenError(error) {
    const headers = getApiHeaders();
    return headers && error.response && error.response.status === 401;
  }
  
  function handleTokenError() {
    // clearData();
    //   store.dispatch(getLogoutAction());
  }
 

  export async function getRequest(url, params) {
    // console.log(">>", await isOnline());
    // if ((await isOnline()) !== false) {
      return new Promise((resolve, reject) => {
        api
          .get(url, { params: params })
          .then((response) => {
            resolve(response);
            console.log("response from get", response);
          })
          .catch((error) => {
            reject(error);
            console.log("error from get", response);
          });
      });
    // }
  }
  