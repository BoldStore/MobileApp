import instance from "../../axios";
import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  USER_ADDRESSES,
} from "../../constants";

export const addAdress = (
  title,
  addressString,
  addressL1,
  addressL2,
  city,
  state,
  pincode,
  notes
) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_ADDRESS_REQUEST });
    try {
      const response = await instance.post(
        ADD_ADDRESS,
        {
          title,
          addressString,
          addressL1,
          addressL2,
          city,
          state,
          pincode,
          notes,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.ADD_ADDRESS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_ADDRESS_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_ADDRESS_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const getUserAddresses = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.USER_ADDRESSES_REQUEST });
    try {
      const response = await instance.get(
        USER_ADDRESSES
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.USER_ADDRESSES_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.USER_ADDRESSES_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.USER_ADDRESSES_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const updateAddress = (
  addressId,
  title,
  addressString,
  addressL1,
  addressL2,
  city,
  state,
  pincode,
  notes
) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_ADDRESS_REQUEST });
    try {
      const response = await instance.post(
        UPDATE_ADDRESS,
        {
          id: addressId,
          title,
          addressString,
          addressL1,
          addressL2,
          city,
          state,
          pincode,
          notes,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_ADDRESS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_ADDRESS_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_ADDRESS_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_ADDRESS_REQUEST });
    try {
      const response = await instance.post(
        DELETE_ADDRESS,
        {
          id: addressId,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.DELETE_ADDRESS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.DELETE_ADDRESS_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_ADDRESS_FAILED,
        errmess: e.toString(),
      });
    }
  };
};
