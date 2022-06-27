import WebpackerReact from 'webpacker-react';

import "../stylesheets/index.scss";

import HomeGreeting from '../components/Home/Greeting';

WebpackerReact.setup({ 'Home/Greeting': HomeGreeting })
