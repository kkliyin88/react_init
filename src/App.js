import React from 'react';
import logo from './logo.svg';
import './App.css';
function Header(props) { 
  return (
    <div>
      <p> 这是一个头部组件__{props.name}</p>
      <span>{props.msg}</span>
    </div>
  )

}
class Home extends React.Component { 
  render() { 
    return (
      <div>
        <h3>这是一个Home组件__{this.props.name}</h3>
     </div> 
    )  
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header name='李铟' msg='组件定义很简单啊'></Header>
        <Home name='liyin'></Home>
      </header>
    </div>
  );
}

export default App;
