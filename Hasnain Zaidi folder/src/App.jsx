// import React from 'react';
// // Yeh line aapko sabse upar likhni hy
// import TitanPortal from './components/TitanPortal'; 
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       {/* Yahan aapka component screen par show hoga */}
//       <TitanPortal />
//       <Dashboard/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import TitanPortal from './components/TitanPortal';
import Dashboard from './components/Dashboard';

function App() {
  const [userSession, setUserSession] = useState({
    isLoggedIn: false,
    role: null, // 'student' or 'trainer'
    info: null
  });

  const handleLoginSuccess = (role, extraInfo) => {
    setUserSession({
      isLoggedIn: true,
      role: role,
      info: extraInfo
    });
  };

  const handleLogout = () => {
    setUserSession({
      isLoggedIn: false,
      role: null,
      info: null
    });
  };

  return (
    <div className="app-root">
      {!userSession.isLoggedIn ? (
        <TitanPortal onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard 
          userRole={userSession.role} 
          sessionInfo={userSession.info} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
}

export default App;