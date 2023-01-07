// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGhrR5xLDxHLh8bGWt2ItGDuswDDfMpcY',
  authDomain: 'next-store-app-aac97.firebaseapp.com',
  projectId: 'next-store-app-aac97',
  storageBucket: 'next-store-app-aac97.appspot.com',
  messagingSenderId: '1019986887402',
  appId: '1:1019986887402:web:582c6f514f77a8ba328d93',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
