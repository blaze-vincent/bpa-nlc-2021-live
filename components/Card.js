import Link from 'next/link';

export default function Card(props){
    
    return (<div className='card'>
        <img src={props.img} style={{"pointerEvents": "none"}}/>
        <h3>{props.title}</h3>

        {/* this needs fixed. this should use Array.map, but it is not behaving as expected, so this nasty code will suffice for now. */}
        <p>{props.description}</p>
        {props.links ? props.links.length > 1 ? <p>
            See {<Link href={props.links[0].url}><a>{props.links[0].name}</a></Link>} and {<Link href={props.links[1].url}><a>{props.links[1].name}</a></Link>} for more info.
        </p>: <p>
        See {<Link href={props.links[0].url}><a>{props.links[0].name}</a></Link>} for more info.
        </p>: ""}
    </div>)
}