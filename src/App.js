import React from 'react';

import Address from './Component/profile/Address'
import FullName from  './Component/profile/FullName'
import ProfilePhoto from "./Component/profile/ProfilePhoto"
function App() {
  return (
    <div style={{ width: "80%" , margin: "0 auto" }}>
      <h1 style={{ color: "red", fontSize: 60 ,textAlign: 'center' }} >Profile</h1>

        <h3 style={{ color: "blue", fontSize: 40   }}>Profile Photo :</h3>
      <ProfilePhoto/>
      <h3 style={{ color: "blue", fontSize: 40 }}>Full name : </h3>
      <FullName/>
      <h3 style={{ color: "blue", fontSize: 40  }}>Address : </h3>
      <Address />
     
      
    </div>
    
  );
}

export default App;
