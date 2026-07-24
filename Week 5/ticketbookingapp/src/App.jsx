import { useState } from "react";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <h2>Flight Details</h2>

      <ul>
        <li>Flight: AI202</li>
        <li>From: Hyderabad</li>
        <li>To: Delhi</li>
        <li>Time: 10:30 AM</li>
      </ul>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>

      <h2>Ticket Booking</h2>

      <p>You can now book your flight tickets.</p>
    </div>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ margin: "40px" }}>
      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {isLoggedIn ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginButton onClick={handleLogin} />
      )}
    </div>
  );
}

export default App;