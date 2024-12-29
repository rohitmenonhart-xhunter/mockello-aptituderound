export interface UserDetails {
  name: string;
  yearOfStudy: string;
  branch: string;
  registerNumber: string;
  email: string;
  college: string;
}

export interface College {
  id: string;
  name: string;
  databaseUrl: string;
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}