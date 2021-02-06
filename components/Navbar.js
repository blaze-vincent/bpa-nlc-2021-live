import Link from 'next/link';

export default function Navbar(){

    return (<div id="navbar">
        <Link href="/">
            <a>Event</a> 
        </Link>
        <Link href="/orlando">
            <a>Orlando</a> 
        </Link>
    </div>)
}