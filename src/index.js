import { h, render } from 'preact'
import Landing from './pages/landing'

import './css/init.css'

let mount = document.getElementById("opener-api");
render(<Landing />, mount, mount.lastChild);