import './App.css';
import NavBar from './components/NavBar';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address'


function App() {
  return (
    <div className="App">
      <NavBar/><br/>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
