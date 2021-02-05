import Link from 'next/link';

export default function TransportationCard(props){
    
    return (<div className='transportation-card'>
        <img src={props.svg} style={{"pointerEvents": "none"}}/>
        <h3>{props.transportationMethod}</h3>
        <p>{props.description}</p>
        {props.links ? props.links.length > 1 ? <p>
            See {<Link href={props.links[0].url}><a>{props.links[0].name}</a></Link>} and {<Link href={props.links[1].url}><a>{props.links[1].name}</a></Link>} for more info.
        </p> :<p>
        See {<Link href={props.links[0].url}><a>{props.links[0].name}</a></Link>} for more info.
        </p>: ""}
    </div>)
}