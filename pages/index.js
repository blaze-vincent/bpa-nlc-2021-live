import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home(){

  return (<div id="home-container">
    <Layout>
      <h2 style={{margin: 0}}>National Leadership Conference</h2>
      <h3><Link href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf"><a>Event Schedule</a></Link></h3>
      <h3 style={{"margin-top": 0}}><Link href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/sites/9/2019/02/NLC-Dress-Code-Policy.pdf"><a>Dress Code</a></Link></h3>
      <ul style={{"list-style-type": "none", textAlign: "center", paddingLeft: "0", maxWidth: "40rem"}}>
        <li>
          Members not dressed in required attire will not be allowed to participate in any session or any competitive event
        </li>
          Members not adhering to the Professional Dress Code will not be allowed on stage
        <li>
          Members refused entrance to an event will be given the opportunity to change into appropriate attire immediately and participate/compete in the event. Having changed into appropriate attire, the member will join testing in progress. No additional time will be given for time missed
        </li>
        <li>
          Members also have the right to grieve the issue immediately after being refused entrance. Grievance of the Dress Code policy will not be accepted if not received in writing at Competitive Events headquarters within 15 minutes of the infraction in question
        </li>
      </ul>
      <h4 style={{margin: 0}}>Professional</h4>
      <ul>
        <li>
          Dress slacks, dress shirt, and tie
        </li>
          Pant or skirt suit
        <li>
          Suit, dress shirt, and tie
        </li>
        <li>
          Dress skirt or dress slacks with coordinated blouse and/or sweater
        </li>
        <li>
          Sport coat, coordinated dress slacks, dress shirt, and tie
        </li>
        <li>
          BPA blazer with dress skirt or dress slacks with blouse or sweater
        </li>
        <li>
          BPA blazer with dress slacks, dress shirt, and tie
        </li>
      </ul>
      <h4 style={{margin: 0}}>Casual</h4>
      <ul>
        <li>
          Sportswear (jeans), pants, and shirt, t-shirt, and shorts
        </li>
      </ul>
      <h4 style={{margin: 0}}>Forbidden</h4>
      <ul>
        <li>
          Strapless, spaghetti straps, tube tops, halter tops, midriff tops
        </li>
        <li>
          Spandex, lycra or transparent clothing
        </li>
        <li>
          Cut-offs or ragged clothing
        </li>
        <li>
          Clothing with inappropriate words and pictures
        </li>
        <li>
          Swim suits not covered with appropriate attire outside designated areas.
        </li>
      </ul>
      <Link href="https://bpa.org/nlc/"><a style={{"margin-bottom": "1.5rem"}}>Official NLC Website</a></Link>
      <img src="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/nlc/wp-content/uploads/sites/9/2019/04/Asset-2.png"></img>
    </Layout>
  </div>)
}
