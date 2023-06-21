import type { WithContext, Person } from 'schema-dts';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jorn Blaedel Garbosa',
  description:
    'Delighting in the art of web development, I dance with code, weaving digital wonders that captivate and inspire.',
  jobTitle: 'Freelancer',
  url: 'https://www.jorndoescode.lol',
  sameAs: [
    'https://github.com/abcdefghijorngarbosaxyz',
    'https://open.spotify.com/user/22uxjubqo5f5ttxanyjui37py',
    'https://twitter.com/dfntlynotjorn',
    'https://rep.ly/dfntlynotjorn',
    'https://instagram.com/definitelynotjorn'
  ],
  image: 'https://www.jorndoescode.lol/opengraph-image.png',
  alumniOf: 'Capiz State University',
  birthPlace: {
    '@type': 'Place',
    name: 'Iloilo City, Philippines'
  },
  givenName: 'Jorn Blaedel',
  familyName: 'Garbosa',
  gender: 'Male',
  nationality: {
    '@type': 'Country',
    name: 'Philippines'
  }
} satisfies WithContext<Person>;

export default person;
