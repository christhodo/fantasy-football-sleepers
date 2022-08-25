export interface Sleeper {
  id: string;
  name: string;
  position: string;
  adp: string;
  comments: string;
}

export interface User {
  email: string;
  password: string;
}

export const emptySleeper = {
  id: '',
  name: '',
  position: '',
  adp: '',
  comments: '',
};
