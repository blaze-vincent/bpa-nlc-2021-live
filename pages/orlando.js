import Layout from '../components/Layout';
import CardDeck from '../components/CardDeck';

export default function Orlando(){

  const transportationMethods = [
    {
      title: 'Foot Traffic',
      img: '/walk.svg',
      description: 'A pedestrian bridge facilitates foot travel to Disney Springs Marketplace from the Saratoga resort.',
      links: [
        {
            name: "The Disney World FAQ",
            url: "https://disneyworld.disney.go.com/faq/disney-springs/driving-alternatives/"
        }
    ]
    },
    {
      title: 'Bike Share',
      img: '/bicycle.svg',
      description: 'Evolve Bicycles provides bike rental services for Disney’s Saratoga Spring Resort guests.',
      links: [
        {
            name: "Evolve Bicycles",
            url: "https://www.evolvebikes.com/articles/disney-area-southwest-orlando-bike-rental-guide-pg174.htm"
        }
    ]
    },
    {
      title: 'Public Transportation',
      img: '/busstop.svg',
      description: 'Public bus services are provided at multiple locations around the Disney resorts.',
      links: [
          {
              name: "Disney Resort Transportation",
              url: "https://disneyworld.disney.go.com/guest-services/resort-transportation/"
          }
      ]
    },
    {
      title: 'Car Rentals',
      img: '/car.svg',
      description: 'Enterprise and Avis provide car rental services in Orlando, with many locations to pick up a car close to your hotel or airport.',
      links: [
        {
              name: "Enterprise",
              url: "https://www.enterprise.com/en/home.html"
        },
        {
            name: "Avis",
            url: "https://www.avis.com/en/home"
        }
        ]
    },
    {
      title: 'Lift services',
      img: '/liftservice.svg',
      description: "Uber and Lyft drivers are abundant in densely populated areas such as Orlando, in case you don't feel like renting a car.",
      links: [
        {
              name: "Uber",
              url: "https://www.uber.com/"
        },
        {
            name: "Lyft",
            url: "https://www.lyft.com/"
        }
        ]
    },
    {
      title: 'Disney Monorail',
      img: '/monorail.svg',
      description: "Two monorails located around the Disney resorts offer free transportation to a number of points of interest.",
      links: [
        {
          name: "Disney Monorail",
          url: "https://disneyworld.disney.go.com/guest-services/monorail-transportation/"
        }
      ]
    }
  ];

  const dineries = [
    {
      title: 'Applebees',
      img: '/breakfast.svg',
      description: "Applebees provides familiar food with curbside options within 10 minutes of Saratoga Springs.",
      links: [
        {
          name: "Applebees",
          url: "https://www.applebees.com/en"
        }
      ]
    },
    {
      title: 'Dave & Busters',
      img: '/arcade.svg',
      description: "Dave & Busters serves dining needs as well as games and social events near Disney resorts.",
      links: [
        {
          name: "Dave & Busters",
          url: "https://www.daveandbusters.com/"
        }
      ]
    }
  ]
  const groceryStores = [
    {
      title: 'ALDI',
      img: '/groceries.svg',
      description: "ALDI offers groceries at low prices with curbside pickup and delivery options.",
      links: [
        {
          name: "ALDI",
          url: "https://www.aldi.us/en/"
        }
      ]
    },
    {
      title: 'Walmart',
      img: '/groceriesmobile.svg',
      description: "Within 10 minutes of Saratoga Springs is a Walmart Supercenter with a wide selection of groceries available for pickup or delivery.",
      links: [
        {
          name: "Walmart",
          url: "https://www.walmart.com/"
        }
      ]
    }
  ]

  return (<div id="orlando-container">
    <Layout>
      <CardDeck title="Transportation" cardsInfo={transportationMethods} />
      <CardDeck title="Food" cardsInfo={dineries} />
      <CardDeck title="Groceries" cardsInfo={groceryStores} />
    </Layout>
  </div>)
}
