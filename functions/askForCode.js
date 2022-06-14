import React from "react";
import { showMessage } from "react-native-flash-message";
import ThemeColours from "../styles/themeColours";

function AskForCode() {
  showMessage({
    message: "Glad you filled the form!",
    description: "Our team will reach out to you shortly!",
    type: "custom",
    color: "#fff",
    backgroundColor: "#000",
  });
  // Toast.show({
  //   text1: "Product Saved!",
  //   text2: "This item has been saved in your wishlist!",
  //   onPress: () => {
  //     Toast.hide();
  //   },
  // });
}

export default AskForCode;
