import React from "react";
import { showMessage } from "react-native-flash-message";
import ThemeColours from "../styles/themeColours";
import Toast from "react-native-toast-message";

function CompleteSignupAlert() {
  // showMessage({
  //   message: "Complete Your Signup",
  //   description: "Oops, seems like you haven't completed your signup.",
  //   type: "custom",
  //   color: "#fff",
  //   backgroundColor: "#000",
  // });
  Toast.show({
    text1: "Complete Your Signup",
    text2: "Oops, seems like you haven't completed yout signup.",
    autoHide: false,
    onPress: () => {
      // navigation.navigate("EditCustomerProfile");
      Toast.hide();
    },
  });
}

export default CompleteSignupAlert;
