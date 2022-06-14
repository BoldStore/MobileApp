import React from "react";
import { showMessage } from "react-native-flash-message";
import ThemeColours from "../styles/themeColours";
import Toast from "react-native-toast-message";

function SavingProducts() {
  // showMessage({
  //   message: "Product Saved!",
  //   description: "This item has been saved in your wishlist!",
  //   type: "custom",
  //   color: "#fff",
  //   backgroundColor: "#000",
  // });
  Toast.show({
    text1: "Product Saved!",
    text2: "This item has been saved in your wishlist!",
    onPress: () => {
      Toast.hide();
    },
  });
}

export default SavingProducts;
