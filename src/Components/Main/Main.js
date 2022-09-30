import React from 'react';
import logo from '../../logo.svg';
import Cards from '../Cards/Cards';
import './Main.css';

const Main = (props) => {
    const { handleAddToList } = props;

    return (
        <div>
            <div className="container px-4">
                <div className='header mt-3 d-flex'>
                    <img src={logo} alt="logo" />
                    <h1 className='fw-bold'>Hub For Bibliophiles</h1>
                </div>
                <h4 className='fw-bold text-success py-3 mb-4'>Select Books You Want To Read Today</h4>
                <Cards handleAddToList={handleAddToList}></Cards>
            </div>

            {/* Question container  */}
            <div className='container p-3 row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                <div className='col p-3'>
                    <h3 className='fw-bold text-success'>How does React work?</h3>
                    <p>React uses JSX to execute code. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. Thus React has made it possible to have as many components as necessary without cluttering the code. Behind the scene, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. This helps to make websites efficient.</p>
                </div>
                <div className='col p-3'>
                    <h3 className='fw-bold text-success'>What is the difference between Props and State?</h3>
                    <p>React State is mutable. So the value of State can be changed as per necessity. It is set by the parent component. It is local to a component and thus cannot be used in other components. <br />On the other hand, Props are immutable, that is, their content cannot be changed once assigned. They are set by event handlers. So they are completely managed by component itself. Props allows child components to read values from parent components.</p>
                </div>
                <div className='col p-3'>
                    <h3 className='fw-bold text-success'>What is the use of useEffect other than loading data?</h3>
                    <p>Hooks allow function components to have access to state and other react features. React useEffect is a Hook that allows us to perform side effects in our components. Some examples of side effects are: directly updating the DOM, timers, fetching data etc. To write the hook, we need to import useEffect from "react", call it above the returned JSX in our component, and pass two arguments: a callBack function and a dependency array.</p>
                </div>
            </div>
        </div>
    );
};

export default Main;