import React, { useEffect } from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/Counter';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
//import { Login } from '@mui/icons-material';
import Login from "./Login";
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  })
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (<Login /> ) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
