import { firebase } from "@react-native-firebase/auth";
// import functions from "@react-native-firebase/functions";
import { CREATE_STORE, UPDATE_STORE } from "../../constants";
import instance from "../../axios";

// UPDATE:
// Done through normal axios, can change
// in the future to use firebase functions
// with react native firebase

// This should hopefully work
// If firebase by default sends the Auth token
// as a header, then this should work
// Else,
// We can just convert the sdk thing to
// an http call using axios, which I already configured

// We really gotta test it
export const createStore = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_STORE_REQUEST });
    try {
      // const instance = functions().httpsCallable(CREATE_STORE);

      // const response = await instance({
      //   email: firebase().auth().currentUser.email,
      // });
      const response = await instance.post(
        CREATE_STORE,
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
          type: ActionTypes.CREATE_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_STORE_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_STORE_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const updateStore = (upi_id, phone_number) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_STORE_REQUEST });
    try {
      const response = await instance.post(
        UPDATE_STORE,
        {
          upi_id: upi_id,
          phone_number: phone_number,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_STORE_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_STORE_FAILED,
        errmess: e.toString(),
      });
    }
  };
};
