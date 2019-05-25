import { h } from 'preact'

const Snippet = (props) => {
    const setCopy = () => {
        document.getElementById(`code-${props.index}`).select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
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
                {props.type === "fetch" ? props.fetch.replace(/  /g, "") : null }
                {props.type === "axios" ? props.axios.replace(/  /g, "") : null }
                {props.type === "module" ? props.module.replace(/  /g, "") : null }
            </div>
            {props.type === "axios" ? <input type="text" value={props.axios.replace(/  /g, "")} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
            {props.type === "fetch" ? <input type="text" value={props.fetch.replace(/  /g, "")} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
            {props.type === "module" ? <input type="text" value={props.module.replace(/  /g, "")} id={`code-${props.index}`} style={{opacity:0,position:"absolute"}} /> : null }
        </div>
    )
}

export default Snippet