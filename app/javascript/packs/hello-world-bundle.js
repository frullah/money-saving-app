import ReactOnRails from 'react-on-rails';

// TODO: fix cannot resolve '../bundles/HelloWorld/components/HelloWorld'
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
