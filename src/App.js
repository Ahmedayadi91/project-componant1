import ProfilePhoto from './componant/profile/ProfilePhoto'
import Address from './componant/profile/Address'
import HomeCarousel from './componant/profile/HomeCarousel'
import './App.css';
import FullName from './componant/profile/FullName';
function App() {
  return (
    <div className="App">
      <div>
        <ProfilePhoto />
       
      {/* <HomeCarousel/> */}
      <div className="card-container">
      <div className="User1">
          <FullName className="User1name" Name="slim" />
          <Address place="Rue Khaled Ib Walid, Tunis" />
        </div>
     
        <>
          <FullName Name="Jalel" />
          <Address place="Place Pasteur, Ariana" />
        </>
        <div className="User3">
          <FullName Name="Hama" />
          <Address place="Rue Hannabal, Carthage" />
        </div>
     
      </div>
    </div>
    {/* <HomeCarousel /> */}
    </div>
  );
}

export default App;
