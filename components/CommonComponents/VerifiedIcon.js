import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

export default function VerifiedIcon() {
  return (
    <Svg
      width="15"
      height="15"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="250" cy="250" r="250" fill="#008FF0" />
      <Rect
        x="149.001"
        y="334.045"
        width="306.42"
        height="50"
        rx="25"
        transform="rotate(-42.5079 149.001 334.045)"
        fill="black"
      />
      <Rect
        x="134.935"
        y="239"
        width="129.687"
        height="53.6746"
        rx="26.8373"
        transform="rotate(48.0747 134.935 239)"
        fill="black"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
