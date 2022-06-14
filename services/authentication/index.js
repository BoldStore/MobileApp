import auth from "@react-native-firebase/auth";

export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    console.log(e);
    return e;
  }
};
