import React, { useEffect, useCallback, useState , lazy, Suspense} from 'react';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {User} from "./global/interfaces";
import './styles/App.css';
import * as ROUTES from "./constants/routes";
import { setUser } from "./features/user/user-slice";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter as Router} from 'react-router-dom';


const user: User = {
  id: 1,
  firstname: "Kanish",
  lastname: "Bodhwani",
  avatar: "bfhjas",
  dateCreated: new Date(),
  emailaddress: "bodhwanikanish@gmail.com",
  userId: "1"
}

const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  const [userData, ] = useState(user);

  const value = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  // const callback = useCallback(
  //   () => dispatch(setUser(userData)), 
  //   [dispatch, userData]
  // )

  // const clickHandler = () => {
  //   callback();
  // }

  useEffect(() => {
    dispatch(setUser(userData))
  }, [dispatch, userData]);


  const AppRoutes = () => {
    return (
      <Suspense fallback={<p> Loading.. </p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />}/>
          <Route path={ROUTES.SIGNUP} element={<Signup />}/>
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
        </Routes>        
      </Suspense>
    )
  }

  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

