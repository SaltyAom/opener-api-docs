/* Preact */
import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

/* Axios */
import Axios from 'axios'

/* Component */
const Return = (props) => {
    /* Connect */
    let { endPoint } = props

    /* State Defination */
    const [data, setData] = useState("Fetching...")

    /* Definatoin */
    let endPointSplit = endPoint.split("/"),
        id = endPointSplit[endPointSplit.length - 1];

    /* Effect */
    useEffect(() => {
        Axios(`https://opener.now.sh/api/${props.endPoint}`).then(data => {
            setData(data.data);
        });
    },[]);

    /* Logical View */
    if(data === "Fetching..."){

        return(
            <Fragment>
                <h3 className="content-return">Return</h3>
                <p className="content-content">* This return value is based on {id}</p>
                <ul>
                    <li>Fetching...</li>
                </ul>
            </Fragment>
        )

    } else {

        let arrName = Object.getOwnPropertyNames(data);

        return(
            <Fragment>
                <h3 className="content-return">Return</h3>
                <p className="content-content">* This return value is based on {id}</p>

                <ul>
                    {arrName.map((name, index) =>
                        <Fragment key={index}>
                            <li>{name}: <span className="type">{ typeof(data[name]) }</span></li>

                            { typeof(data[name]) === "object" ? 
                                <ul>

                                    {Object.getOwnPropertyNames(data[name]).map((detail,index) =>
                                        <Fragment key={index}>
                                            <li>
                                                {detail}: <span className="type">{ typeof(data[name][detail]) }</span>
                                            </li>

                                            { typeof(data[name][detail]) === "object" && !props.shallow ? 
                                                <ul>

                                                    {Object.getOwnPropertyNames(data[name][detail]).map((doc,index) =>
                                                        <li key={index}>
                                                            {doc}: <span className="type">{ typeof(data[name][detail][doc]) }</span>
                                                        </li>
                                                    )}
                                                    
                                                </ul>
                                            : null }

                                        </Fragment>
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