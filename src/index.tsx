import App from './App.jsx';

import { render } from '@solidjs/web';

const root = document.getElementById('root');
if (root) {
  render(() => <App />, root);
}
