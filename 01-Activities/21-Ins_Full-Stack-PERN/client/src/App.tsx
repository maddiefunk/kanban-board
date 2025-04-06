import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <main className="container container-fluid mt-5">
        <Outlet /> 
        {/* renders our own components from main.tsx etc */}
      </main>
    </div>
  )
}

export default App
