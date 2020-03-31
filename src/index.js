import React from 'react';
import ReactDOM from 'react-dom';
import FlickrNasaApp from './components/FlickrNasaApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FlickrNasaApp />, document.getElementById('app'));

serviceWorker.register();
