import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(): React.ReactNode {
    return <div>Hello123</div>
  }
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);