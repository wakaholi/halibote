import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { UserInfo, defaultUserInfo } from '../domain/UserInfo';

export const useUserInfo = (): UserInfo => {
  const [userInfo, setUser] = useState(defaultUserInfo);

  useEffect(() => {
    const login = async () => {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          setUser({
            uid: user?.uid,
            photoUrl: user?.photoURL,
            displayName: user?.displayName,
          });
        } else {
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
        }
      });
    };
    login();
  }, []);

  return userInfo;
};
