import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import './styles/tailwind.css';

const App = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));