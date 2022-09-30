import { useState } from 'react';
import './App.css';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main/Main';

function App() {
  const [total, setTotal] = useState(0);

  // handle Add To List button 
  const handleAddToList = (pages) => {
    const previousValue = total;
    const newValue = previousValue + pages;
    setTotal(newValue);
  }

  return (
    <div className="bg-secondary bg-opacity-25 row row-cols-1 row-cols-md-2 g-0">
      {/* Main container  */}
      <div className='col-12 col-md-8 col-lg-9'>
        <Main handleAddToList={handleAddToList}></Main>
      </div>

      {/* Aside container */}
      <div className='col-12 col-md-4 col-lg-3'>
        <Aside
          total={total}
        ></Aside>
      </div>
    </div>
  );
}

export default App;
