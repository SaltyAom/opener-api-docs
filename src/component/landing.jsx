import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Axios from 'axios'

const Snippet = (props) => {
    const setCopy = () => {
        document.getElementById(`code-${props.index}`).select();
        document.execCommand("copy");
    }

    return(
        <div className="code-snippet-container">
            <div className="code-heading">
                <div className="code-heading-type">
                    <button onClick={() => props.setPreference("axios")} className="code-heading">Axios</button>
                    <button onClick={() => props.setPreference("fetch")} className="code-heading">Fetch</button>
                    <button onClick={() => props.setPreference("module")} className="code-heading">Module</button>
                </div>
                <div className="code-tools">
                    <button className="code-heading-copy code-heading" onClick={() => setCopy()}>Copy</button>
                </div>
            </div>
            <div className="code-snippet">
                {props.type === "axios" ? props.axios : null }
                {props.type === "fetch" ? props.fetch : null }
                {props.type === "module" ? props.module : null }
            </div>
            {props.type === "axios" ? <input type="text" value={props.axios} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
            {props.type === "fetch" ? <input type="text" value={props.fetch} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
            {props.type === "module" ? <input type="text" value={props.module} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
        </div>
    )
}

const Return = (props) => {
    const [data, setData] = useState("Fetching..."),
        endPointSplit = props.endPoint.split("/"),
        id = endPointSplit[endPointSplit.length - 1];

    useEffect(() => {
        Axios(`https://opener.now.sh/api/${props.endPoint}`).then(data => {
            setData(data.data);
        });
    },[]);

    if(data === "Fetching..."){
        return(
            <Fragment>
                <h2>Return</h2>
                <p>* This return value is based on {id}</p>
                <ul>
                    <li>Fetching...</li>
                </ul>
            </Fragment>
        )
    } else {
        let arrName = Object.getOwnPropertyNames(data);
        return(
            <Fragment>
                <h2>Return</h2>
                <p>* This return value is based on {id}</p>
                <ul>
                    {arrName.map(name =>
                        <Fragment>
                            <li>{name}: <span className="type">{ typeof(data[name]) }</span></li>
                            { typeof(data[name]) === "object" ? 
                                <ul>
                                    {Object.getOwnPropertyNames(data[name]).map(detail =>
                                        <li>
                                            {detail}: <span className="type">{ typeof(data[name][detail]) }</span>
                                        </li>
                                    )}
                                </ul>
                            : null }
                        </Fragment>
                    )}
                </ul>
            </Fragment>
        )
    }
}

export default () => {
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
    }, []);

    return(
        <Fragment>
            <a id="banner" href="#what-is">
                <h2 id="banner-title">Opener-API</h2>
                <p id="banner-detail">Opener-API documentation, usage and example</p>
            </a>

            <section id="what-is">
                <h1>What is</h1>
                <p>
                    Is an API service for fetching data from nhentai as middleware (since nhentai api
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
                </ul>

            </section>

            <section>
                <h1>Setup</h1>
                <p>Using Axios:</p>
                <div className="code-snippet-container">
                    <div className="code-snippet">
                        // With npm <br />
                        npm install axios --save <br />
                        <br />
                        // With yarn <br />
                        yarn add axios <br />
                    </div>
                </div>
                <p>Using opener-api:</p>
                <div className="code-snippet-container">
                    <div className="code-snippet">
                        // With npm <br />
                        npm install opener-api --save <br />
                        <br />
                        // With yarn <br />
                        yarn add opener-api <br />
                    </div>
                </div>
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
                    module={`OpenerAPI.getData(229345)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={0}
                />
                <Return endPoint="data/229345" />
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
                    module={`OpenerAPI.getOpenGraph(229345)
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
                    module={`OpenerAPI.getRelate(229345)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={2}
                />
                <Return endPoint="relate/229345" />
            </section>

            <section id="tag">
                <h1>
                    Tag
                </h1>
                <p>
                    Get doujinshi's tag related. Can be guide by page as second parameter.
                </p>
                <p>
                    * If no page provided, provided page value will be 1
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/tag/:tag/:page')
                    .then(res => res.json())
                    .then(data => console.log(data.data));`}
                    axios={`axios('https://opener.now.sh/api/tag/:id/:page')
                    .then(data => console.log(data.data));`}
                    module={`OpenerAPI.getRelate(229345, 1)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={3}
                />
                <Return endPoint="relate/crossdressing" />
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
                    module={`OpenerAPI.getGenerate(229345)
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={4}
                />
                <Return endPoint="generate/229345" />
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

        </Fragment>
    )
}