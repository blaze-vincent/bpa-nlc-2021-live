import Card from './Card';

export default function CardDeck(props){

    return (<div className='card-deck'>
        <h2>{props.title}</h2>
        {
            props.cardsInfo.map((cardinfo, i) => {
              return <Card title={cardinfo.title} img={cardinfo.img} description={cardinfo.description} links={cardinfo.links} key={i} />
            })
        }
    </div>)
}