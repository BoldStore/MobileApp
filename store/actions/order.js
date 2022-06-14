import instance from "../../axios";
import {
  CHECK_DELIVERY,
  CREATE_ORDER,
  PAST_ORDERS,
  VERIFY_ORDER,
} from "../../constants";

export const createOrder = (product_id, address_id) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_ORDER_REQUEST });
    try {
      const response = await instance.post(
        CREATE_ORDER,
        {
          product_id,
          address_id,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.CREATE_ORDER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_ORDER_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_ORDER_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const verifyOrder = (
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature
) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.VERIFY_ORDER_REQUEST });
    try {
      const response = await instance.post(
        VERIFY_ORDER,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.VERIFY_ORDER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.VERIFY_ORDER_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.VERIFY_ORDER_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const pastOrders = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.PAST_ORDERS_REQUEST });
    try {
      const response = await instance.get(
        PAST_ORDERS
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.PAST_ORDERS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.PAST_ORDERS_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.PAST_ORDERS_FAILED,
        errmess: e.toString(),
      });
    }
  };
};

export const checkForDelivery = (postCode, productId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CHECK_DELIVERY_REQUEST });
    try {
      const response = await instance.post(
        CHECK_DELIVERY,
        {
          postCode,
          productId,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.CHECK_DELIVERY_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CHECK_DELIVERY_FAILURE,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CHECK_DELIVERY_FAILED,
        errmess: e.toString(),
      });
    }
  };
};
