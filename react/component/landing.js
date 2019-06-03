import { useState, useEffect } from 'react'

import Head from 'next/head'
import { register, unregister } from 'next-offline/runtime'

import Snippet from './snippet'
import Return from './return'

import Fav from '../../static/img/fav.png'

const Documentation = () => {
    const [type, setType] = useState("axios");
    
    const setPreference = (prefer = "axios") => {
        switch(prefer){
            case "axios":
                setType("axios");
                break;
            case "fetch":
                setType("fetch");
                break;
            case "module":
                setType("module");
                break;
            default:
                setType("axios");
                break;
        }
    }

    useEffect(() => {
        register();
        return(() => {
            unregister();
        });
    }, []);

    return(
        <>
            <Head>
                <meta httpEquiv="content-type" content="text/html, charset=utf8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <title>Opener API</title>

                <meta name="title" content="Opener API"/>
                <meta name="description" content="Opener API documentation, usage and example"/>
                <meta name="author" content="aomkirby123"/>
                <link rel="icon" href={Fav} />
                <link rel="canonical" href="https://doc.opener.mystiar.com"/>

                <meta property="og:title" content="Opener API"/>
                <meta property="og:description" content="Opener API documentation, usage and example"/>
                <meta property='article:author' content="aomkirby123"/>
                <meta property='og:site_name' content="Mystiar"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://opener.mystiar.com/assets/app/util/introducing%20opener.jpg"/>
                <meta property="og:image:width" content="1920"/>
                <meta property="og:image:height" content="1080"/>

                <link rel="dns-prefetch" href="https://opener.mystiar.com"/>
                <link rel="dns-prefetch" href="https://github.com/aomkirby123/nhnetai-opener"/>
                <link rel="dns-prefetch" href="https://github.com/aomkirby123/opener-api"/>
            </Head>
            <a aria-label="Floating Action Button: Go to navigation" id="fab" href="#getting-start">
                <svg id="fab-icon" style={{fill:"#fff"}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>
            </a>

            <a aria-label="Getting start" id="banner" href="#what-is">
                <h2 id="banner-title">Opener-API</h2>
                <p id="banner-detail">Opener-API documentation, usage and example</p>
            </a>

            <section id="what-is">
                <h1>What is</h1>
                <p>
                    Opener API is an API service for fetching data from nhentai as middleware (since nhentai api
                    can only be fetched on a serverside). <br />
                </p>
                <p>
                    Opener API is free services and is open-source on <a href="https://github.com/aomkirby123/opener-api">Github</a>.
                </p>
            </section>

            <section id="getting-start">
                <h1>Getting started</h1>
                <p>
                    As an RESTful API, Opener API endpoint is at <a href="https://opener.now.sh" target="_blank">opener.now.sh</a>.
                </p>
                <p>
                    Fetch API or Axios is recommended for fetching data.
                </p>
                <p>
                    Opener API also has module as shorten function for fetching data name <a href="https://www.npmjs.com/package/opener-api" target="_blank">opener-api</a>.
                </p>
                <ul>
                    <li>
                        <a href="#data">Data</a>
                    </li>
                    <li>
                        <a href="#open-graph">Open Graph</a>
                    </li>
                    <li>
                        <a href="#relate">Relate</a>
                    </li>
                    <li>
                        <a href="#tag">Tag</a>
                    </li>
                    <li>
                        <a href="#generate">Generate</a>
                    </li>
                    <li>
                        <a href="#image">Image</a>
                    </li>
                </ul>
                <p>* Based on 1.3.0 API version</p>

            </section>

            <section>
                <h1>Setup</h1>
                <p>This section will help you setup with your preference method:</p>
                <Snippet
                    fetch={`// With fetch

                    No setup require, rely on browser API.

                    It's not recommended to use fetch on old browser.
                    Some old Browser might not support.
                    
                    Using an Axios is recommended instead.
                    
                    But there's also a polyfill for fetch APIwith XMLHttpRequest
                    
                    Add this to your <head> tag:

                    <script async src="https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js"></script>`}
                    axios={`// With Axios
                    
                    Install module:

                    // With npm
                    npm install axios --save
                    
                    // With yarn
                    yarn add axios
                    
                    Import Axios Module:

                    // With import 
                    import Axios from 'axios'
                    
                    // With require 
                    const Axios = require('axios')
                    `}
                    module={`// With opener-api
                    
                    Install module:

                    // With npm
                    npm install opener-api --save
                    
                    // With yarn
                    yarn add opener-api
                    
                    Import opener-api Module:

                    // With import
                    import OpenerAPI from 'opener-api'
                    
                    // With require 
                    const OpenerAPI = require('opener-api')
                    `}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={999}
                />
            </section>

            <section id="data">
                <h1>
                    Data
                </h1>
                <p>
                    Get doujinshi's detail can be retrieve from nhentai based on 6 digits code (Actually can be from 1-6 digits).
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/data/:id')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/data/:id')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getData(:id)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={0}
                />
                <Return endPoint="data/273172" />
            </section>

            <section id="opengraph">
                <h1>
                    Open Graph <span className="deprecated">Deprecated</span>
                </h1>
                <p>
                    Get doujinshi's opengraph data.
                </p>
                <p>
                    Is deprecated, use <a href="#data">data</a> instead.
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/g/:id')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/g/:id')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getOpenGraph(:id)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={1}
                />
            </section>

            <section id="relate">
                <h1>
                    Relate
                </h1>
                <p>
                    Retreive 5 most related doujinshi.
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/relate/:id')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/relate/:id')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getRelate(:id)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={2}
                />
                <Return endPoint="relate/273172" />
            </section>

            <section id="tag">
                <h1>
                    Tag
                </h1>
                <p>
                    Get doujinshi's tag related. Can be guide by page as second parameter.
                </p>
                <p>
                    There's 25 object per page.
                </p>
                <p>
                    * If no page provided, provided page value will be 1
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/tag/:tag/:page')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/tag/:tag/:page')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getTag(:tag, :page)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={3}
                />
                <Return endPoint="tag/crossdressing" />
            </section>

            <section id="generate">
                <h1>
                    Generate
                </h1>
                <p>
                    Get generate's image of doujinshi, can be used with decrpyt on <a href="https://opener.mystiar.com/drop" target="_blank">opener.mystiar.com/drop</a>
                </p>
                <p>
                    * If no page provided, provided page value will be 1
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/generate/:id/')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/generate/:id')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getGenerate(:id)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={4}
                />
                <h2>Return</h2>
                <ul>
                    <li>success: <span className="type">boolean</span></li>
                    <li>error: <span className="type">boolean</span></li>
                    <li>dataURL: <span className="type">string</span></li>
                </ul>
            </section>

            <section id="image">
                <h1>
                    Image
                </h1>
                <p>
                    Get pages' image as result.
                </p>
                <p>
                    * If no page provided, will return all pages's image including cover's image.
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/image/:id/:page')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/image/:id/:page')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getImage(:id, :page)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={4}
                />
                <Return endPoint="image/273172" />
            </section>

            <section id="closing">
                <h1>Conclusion</h1>
                <p>
                    Opener API is free service provided as a bridge to fetching data from NHentai and is open-source.
                </p>
                <p>
                    You can help contribute on <a href="https://github.com/aomkirby123/opener-api">Github</a>.
                </p>
            </section>

        </>
    )
}

export default Documentation