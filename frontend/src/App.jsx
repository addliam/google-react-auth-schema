import { useState } from "react";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
function App() {
  return (
    <>
      <h1>Login with Google</h1>
      <div className="carda">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log(`Login failed!`);
          }}
          useOneTap={true}
        />
      </div>
    </>
  );
}

export default App;
