export type UserInfo = {
  uid: string | null;
  photoUrl: string | null;
  displayName: string | null;
};

export const defaultUserInfo: UserInfo = {
  uid: '',
  photoUrl: '',
  displayName: '',
};
