import React from "react";
import { auth } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";



// useEffect(() => {
//     // auth listener to keep track of user signing in and out
//     const [loggedIn, setLoggedIn] = useState(false);

//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setLoggedIn(true);
//       }
//     });
//   }, []);



const ProtectedRoute = ({ children }) => {
  let user = localStorage.getItem('loggedIn');
  if (user === 'false') {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;