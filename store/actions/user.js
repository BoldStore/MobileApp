import { firebase } from "@react-native-firebase/auth";
import instance from "../../axios";
// import functions from "@react-native-firebase/functions";
import {
  ADD_INSTA_USERNAME,
  CREATE_USER,
  GET_PERSONAL_DETAILS,
  UPDATE_USER,
} from "../../constants";

export const createUser = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_USER_REQUEST });
    try {
      const response = await instance.post(
        CREATE_USER,
        {
          email: firebase().auth().currentUser.email,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.CREATE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_USER_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_USER_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const addInstaUsername = (insta_username) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_INSTA_USERNAME_REQUEST });
    try {
      const response = await instance.post(
        ADD_INSTA_USERNAME,
        {
          insta_username,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.ADD_INSTA_USERNAME_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_INSTA_USERNAME_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_INSTA_USERNAME_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const getPersonalDetails = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_PERSONAL_DETAILS_REQUEST });
    try {
      const response = await instance.get(
        GET_PERSONAL_DETAILS
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.GET_PERSONAL_DETAILS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.GET_PERSONAL_DETAILS_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_PERSONAL_DETAILS_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const updateUser = (name, birthday, sizePreference, phone) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_USER_REQUEST });
    try {
      const response = await instance.post(
        UPDATE_USER,
        {
          name,
          birthday,
          sizePreference,
          phone,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_USER_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_USER_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const deleteUser = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_USER_REQUEST });
    try {
      const response = await instance.get(
        DELETE_USER
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.DELETE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.DELETE_USER_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_USER_FAILED,
        errmess: e.toString(),
      });
    }
  };
};
