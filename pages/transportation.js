import Layout from '../components/Layout';
import TransportationCardDeck from '../components/TransportationCardDeck';

export default function Transportation(){

  const transportationCards = [
    {
      transportationMethod: 'Walk',
      svg: '/walk.svg',
      description: 'bla bla bla walking info goes here'
    },
    {
      transportationMethod: 'Bike',
      svg: '/bicycle.svg',
      description: 'bla bla bla bike rental/public bike info goes here'
    },
    {
      transportationMethod: 'Bus',
      svg: '/busstop.svg',
      description: 'bla bla bla bus services and related info goes here'
    },
    {
      transportationMethod: 'Rent a car',
      svg: '/car.svg',
      description: 'bla bla bla car rental services info goes here'
    },
    {
      transportationMethod: 'Lift services',
      svg: '/liftservice.svg',
      description: 'bla bla bla lift services and related info goes here'
    },
  ]

  return (<div>
    <Layout>
      <TransportationCardDeck cardArray={transportationCards} />
    </Layout>
  </div>)
}
