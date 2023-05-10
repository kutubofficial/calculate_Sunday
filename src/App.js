import './App.css';
import { useState } from 'react';
import UserDetails from './Components/UserDetails';
import DateComponent from './Components/DateComponent';

const App = () => {
  const [user, setUser] = useState(null);

  const handleNext = (userData) => {
    setUser(userData);
  };

  const handleDateSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      {user ? (
        <DateComponent user={user} onSubmit={handleDateSubmit} />
      ) : (
        <UserDetails onNext={handleNext} />
      )}
    </div>
  )
}

export default App;