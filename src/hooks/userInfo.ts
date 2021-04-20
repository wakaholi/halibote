import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { UserInfo, defaultUserInfo } from '../domain/UserInfo';

export const useUserInfo = (): UserInfo => {
  const [userInfo, setUser] = useState(defaultUserInfo);

  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    // TODO: セッションからユーザー情報を取得できるようにしたい
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user)
    //     setUser({
    //       uid: user?.uid,
    //       photoUrl: user?.photoURL,
    //       displayName: user?.displayName,
    //     });
    // });

    const login = async () => {
      try {
        const result = await firebase.auth().getRedirectResult();
        if (result.user) {
          setUser({
            uid: result.user?.uid,
            photoUrl: result.user?.photoURL,
            displayName: result.user?.displayName,
          });
        } else {
          firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
      } catch {
        Error('Auth Error');
      }
    };
    login();
  }, []);

  return userInfo;
};
