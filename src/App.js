import './App.css';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main/Main';

function App() {

  return (
    <div className="container-fluid bg-secondary bg-opacity-25 row">
      <div className='col-sm-12 col-md-9'>
        <Main></Main>
      </div>
      <div className='col-sm-12 col-md-3'>
        <Aside></Aside>
      </div>
    </div>
  );
}

export default App;
