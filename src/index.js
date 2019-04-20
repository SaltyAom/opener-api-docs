import { h, render } from 'preact'
import Landing from './component/landing'

import './css/init.css'

let mount = document.getElementById("opener-api");
render(<Landing />, mount, mount.lastChild);