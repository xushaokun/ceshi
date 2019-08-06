import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './component/ToDo';

class App extends React.Component {
    render(){ // Every react component has a render method.
      return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
        <div>
            <ToDo/>
        </div>
      );
    }
  }

  ReactDOM.render(<App/>, document.getElementById('app'));