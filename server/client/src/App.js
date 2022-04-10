import { Route, Routes } from "react-router-dom";
import SignInSide from "./components/signIn/SignInSide";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <>
   
    
    <Routes>
      <Route path='/' element={<SignInSide />} />
      <Route path='/registr' element={<SignUp />} />
    </Routes>
    
    </>
  );
}

export default App;
