export interface FormData {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
  }
export interface Errors {
    email: boolean;
    password: boolean;
    name: boolean;
    confirmPassword: boolean;
  }