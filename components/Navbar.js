import Link from 'next/link';

export default function Navbar(){

    return (<div id="navbar">
        <Link href="/">
            <a>Home</a> 
        </Link>
        <Link href="/orlando">
            <a>Orlando</a> 
        </Link>
        <Link href="/policies">
            <a>Policies</a>
        </Link>
    </div>)
}