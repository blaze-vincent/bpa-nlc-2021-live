import TransportationCard from './TransportationCard';

export default function TransportationCardDeck(){

    const transportationMethods = [
        {
          transportationMethod: 'Walk',
          svg: '/walk.svg',
          description: 'A pedestrian bridge facilitates foot travel to Disney Springs Marketplace from the Saratoga resort.',
          links: [
            {
                name: "The Disney World FAQ",
                url: "https://disneyworld.disney.go.com/faq/disney-springs/driving-alternatives/"
            }
        ]
        },
        {
          transportationMethod: 'Bike',
          svg: '/bicycle.svg',
          description: 'Evolve Bicycles provides bike rental services for Disney’s Saratoga Spring Resort guests.',
          links: [
            {
                name: "Evolve Bicycles",
                url: "https://www.evolvebikes.com/articles/disney-area-southwest-orlando-bike-rental-guide-pg174.htm"
            }
        ]
        },
        {
          transportationMethod: 'Public Transportation',
          svg: '/busstop.svg',
          description: 'Public bus services are provided at multiple locations around the Disney resorts.',
          links: [
              {
                  name: "Disney Resort Transportation",
                  url: "https://disneyworld.disney.go.com/guest-services/resort-transportation/"
              }
          ]
        },
        {
          transportationMethod: 'Car Rentals',
          svg: '/car.svg',
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
          transportationMethod: 'Lift services',
          svg: '/liftservice.svg',
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
        }
      ];

    return (<div id='transportation-card-deck'>
        <h2>Transportation</h2>
        {
            transportationMethods.map((cardinfo, i) => 
            <TransportationCard transportationMethod={cardinfo.transportationMethod} svg={cardinfo.svg} description={cardinfo.description} key={i} links={cardinfo.links}/>)
        }
    </div>)
}