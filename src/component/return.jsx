import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Axios from 'axios'

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
                                            { typeof(data[name]) === "object" && !props.shallow ? 
                                                <ul>
                                                    {Object.getOwnPropertyNames(data[name][detail]).map(doc =>
                                                        <li>
                                                            {doc}: <span className="type">{ typeof(data[name][detail][doc]) }</span>
                                                        </li>
                                                    )}
                                                </ul>
                                            : null }
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

export default Return