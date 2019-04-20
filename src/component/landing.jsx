import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

const Snippet = (props) => {
    const setCopy = () => {
        document.getElementById(`code-${props.index}`).select();
        document.execCommand("copy");
        document.getElementById(`code-${props.index}`).blur();
        if (window.getSelection) {window.getSelection().removeAllRanges();}
        else if (document.selection) {document.selection.empty();}
    }

    return(
        <Fragment>
            <div className="code-heading">
                <div className="code-heading-type">
                    <button onClick={() => props.setPreference("axios")} className="code-heading code-heading-button-left">Axios</button>
                    <button onClick={() => props.setPreference("fetch")} className="code-heading code-heading-button-right">Fetch</button>
                </div>
                <div>
                    <button className="code-heading-copy" onClick={() => setCopy()}>Copy</button>
                </div>
            </div>
            <textarea readOnly rows={4} id={`code-${props.index}`}>
                {props.type === "axios" ? props.axios : null }
                {props.type === "fetch" ? props.fetch : null }
            </textarea>
        </Fragment>
    )
}

export default () => {
    const [type, setType] = useState("axios");
    
    const setPreference = (prefer = "axios") => {
        (prefer === "axios") ? setType("axios") : setType("fetch");
    }

    return(
        <Fragment>
            <a id="banner" href="#opening">
                <h2 id="banner-title">Opener API</h2>
                <p id="banner-detail">Opener API documentation, usage and example</p>
            </a>
            <section id="opening">
                <h1>What is?</h1>
                <blockquote>
                    Basically, an API which is used in Opener but is opened for everyone.
                </blockquote>
                <p>
                    Opener API is a RESTful API for developing web app/etc and share or use with Opener. <br />
                    Opener Pro also use this API as a gateway for fetching data from nhentai and maintain.
                </p>
            </section>
            <section>
                <h1>Open Graph</h1>
                <code>
                    https://opener.now.sh/api/g/:providedID
                    <br />
                    <span className="text-less">// Where providedID is 6 digits code of nhentai</span>
                </code>
                <p>
                    Fetching an Open Graph data from nhentai <br />
                    Opener use this method to get preview data of item.
                </p>
                <p>
                    To fetch the data we recommended to use <a className="code-link" target="_blank" href="https://npmjs.com/package/axios">Axios</a>.
                </p>
                <Snippet
                    fetch={`fetch('https://opener.now.sh/api/g/:id')
                    .then(res => res.json())
                    .then(data => console.log(data));`}
                    axios={`axios('https://opener.now.sh/api/g/:id')
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={0}
                />
                <h2>On Success</h2>
                <p>
                    If succeed, the data is returned as an object of data which is the result of Open Graph data requested from nhentai with provided ID.
                    Data will return as the following:
                </p>
                <ul>
                    <li>data: as provided below <span className="text-primary">(object)</span></li>
                    <li>requestURL: "https://nhentai.net/g/:providedID" <span className="text-primary">(string)</span></li>
                    <li>success: true <span className="text-primary">(boolean)</span></li>
                </ul>
                <ul>
                    <p className="text-primary">data: object</p>

                    <li>ogTitle: An open graph title <span className="text-primary">(string)</span></li>
                    <li>ogDescription: An open graph description <span className="text-primary">(string)</span></li>
                    <li>
                        ogImage: return open graph image data <span className="text-primary">(object)</span>
                        <ul>
                            <li>height: Open graph image's height <span className="text-primary">(number)</span></li>
                            <li>width: Open graph image's width <span className="text-primary">(number)</span></li>
                            <li>type: Open graph image's type. (<span className="code-text">p</span> for <span className="code-text">png</span> and <span className="code-text">j</span> for <span className="code-text">jpg</span>,</li>
                        </ul>
                    </li>
                    <li>ogType: Return Open graph type <span className="text-primary">(string)</span></li>
                    <li>twitterCard: Return Twitter's card type (Usually return as "summary") <span className="text-primary">(string)</span></li>
                    <li>twitterDescription: Return <span className="code-text">tags <span className="text-primary">(string)</span></span></li>
                    <li>twitterTitle: Return title which reveal on Twitter (Usually as same as <span className="code-text">ogTitle</span>) <span className="text-primary">(string)</span></li>
                </ul>
                <h2>On Error</h2>
                <p>
                    Error while return only when: "Page Not Found" which mean provided ID isn't existed on nhentai,
                    which will return data as following:
                </p>
                <ul>
                    <li>success: false <span className="text-primary">(boolean)</span></li>
                    <li>error: Error Message <span className="text-primary">(string)</span></li>
                    <li>requestURL: "https://nhentai.net/g/:providedID" <span className="text-primary">(string)</span></li>
                    <li>errorDetail: Error's detail <span className="text-primary">(object)</span></li>
                </ul>
            </section>
            <section>
                <h1>Generate</h1>
                <code>
                    https://opener.now.sh/api/generate/:providedID
                    <br />
                    <span className="text-less">// Where providedID is 1-6 digits of hex code</span>
                </code>
                <p>
                    This endpooint is used to generate an image of <span className="code-text">256x256</span> in <span className="code-text">png</span> format.
                </p>
                <p>
                    Result of image source is returned as <span className="code-text">data:image/png;base64</span>, which can be directed put in <span className="code-text">src</span>.
                </p>
                <Snippet 
                    fetch={`fetch('https://opener.now.sh/api/generate/:id')
                    .then(res => res.json())
                    .then(data => console.log(data));`}
                    axios={`axios('https://opener.now.sh/api/generate/:id')
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={(prefer) => setPreference(prefer)}
                    index={1}
                />
                <h2>On success</h2>
                <p>
                    If succeed, the data is returned as an object which is result of generated image.
                </p>
                <ul>
                    <li>success: true <span className="text-primary">(boolean)</span></li>
                    <li>error: null <span className="text-primary">(null)</span></li>
                    <li>dataURL: Result of an generated image <span className="text-primary">(string)</span></li>
                </ul>
                <h2>On error</h2>
                <p>Usually, it's nearly impossible to get an error of this end point (except for 5xx error and ID isn't provided).</p>
                <p>
                    Normally, if a provided ID surpass 6 digits, API will automatically use only first 6 digit and if provided ID doesn't reach 6 digits, the API will put an 'f' instead (Normally, Opener will automatically cut an 'f' on production which result any digits from 1 to 6 is possible).
                </p>
                <ul>
                    <li>success: false <span className="text-primary">(boolean)</span></li>
                    <li>error: Error message <span className="text-primary">(string)</span></li>
                </ul>
            </section>
            <section>
                <h1>Relate</h1>
                <code>
                    https://opener.now.sh/api/realte/:providedID
                    <br />
                    <span className="text-less">// Where providedID is 1-6 digits of hex code</span>
                </code>
                <p>Opener API also available to get 5 most related doujinshi to provided ID.</p>
                <Snippet 
                    fetch={`fetch('https://opener.now.sh/api/relate/:id')
                    .then(res => res.json())
                    .then(data => console.log(data));`}
                    axios={`axios('https://opener.now.sh/api/relate/:id')
                    .then(data => console.log(data));`}
                    type={type}
                    setPreference={setPreference}
                    index={2}
                />
                <h2>On success</h2>
                <p>
                    If succeed, the data is returned as object containing <span className="code-text">5 arrays</span> of related doujinshi, the data is returned in the name of <span className="code-text">result</span> as listed as below.
                </p>
                <ul>
                    <li>result</li>
                    <ul>
                        <li>[0]: <span className="text-primary">(object)</span></li>
                        <li>[1]: <span className="text-primary">(object)</span></li>
                        <li>[2]: <span className="text-primary">(object)</span></li>
                        <li>[3]: <span className="text-primary">(object)</span></li>
                        <li>[4]: <span className="text-primary">(object)</span></li>
                    </ul>
                </ul>
                <p className="text-primary">[index]: object return the following data.</p>
                <ul>
                    <li>id: provided ID <span className="text-primary">(string)</span></li>
                    <li>images: return image's data <span className="text-primary">(object)</span></li>
                    <ul>
                        <li>cover: return image's cover data <span className="text-primary">(object)</span></li>
                        <ul>
                            <li>h: image's height <span className="text-primary">(number)</span></li>
                            <li>w: image's width <span className="text-primary">(number)</span></li>
                            <li>t: image's type. (<span className="code-text">p</span> for <span className="code-text">png</span> and <span className="code-text">j</span> for <span className="code-text">jpg</span>)</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>pages: return images' gallery data <span className="text-primary">(object)</span></li>
                        <p className="text-primary">[index]: <span className="text-primary">(object)</span></p>
                        <ul>
                            <li>h: image's height <span className="text-primary">(number)</span></li>
                            <li>w: image's width <span className="text-primary">(number)</span></li>
                            <li>t: image's type. (<span className="code-text">p</span> for <span className="code-text">png</span> and <span className="code-text">j</span> for <span className="code-text">jpg</span>)</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>thumbnail: return image's thumbnail data <span className="text-primary">(object)</span></li>
                        <ul>
                            <li>h: image's height <span className="text-primary">(number)</span></li>
                            <li>w: image's width <span className="text-primary">(number)</span></li>
                            <li>t: image's type. (<span className="code-text">p</span> for <span className="code-text">png</span> and <span className="code-text">j</span> for <span className="code-text">jpg</span>)</li>
                        </ul>
                    </ul>
                    <li>media_id: nhentai's reference ID <span className="text-primary">(string)</span></li>
                    <li>num_favorites: total favorite on nhentai <span className="text-primary">(number)</span></li>
                    <li>num_pages: total pages' story on nhentai <span className="text-primary">(number)</span></li>
                </ul>
            </section>
        </Fragment>
    )
}