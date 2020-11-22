import {
  faGithub,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'

type ContactInfo = { icon: IconDefinition; text: string; link: string }

const contactInfo: ContactInfo[] = [
  {
    icon: faGithub,
    text: 'github.com/cascandaliato',
    link: 'https://github.com/cascandaliato',
  },
  {
    icon: faTwitter,
    text: 'twitter.com/cascandaliato',
    link: 'https://twitter.com/cascandaliato',
  },
  {
    icon: faEnvelope,
    text: 'carmelo.scandaliato@gmail.com',
    link: 'mailto:carmelo.scandaliato@gmail.com',
  },
]

const Home: React.FC<{}> = () => (
  <div className="w-full h-screen bg-gradient-to-b sm:bg-gradient-to-r from-blue-600 to-lightBlue-500 sm:from-blue-600 sm:via-lightBlue-500 sm:to-lightBlue-400 flex items-center justify-center text-white font-lato">
    <Head>
      <title>Carmelo Scandaliato</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        href="favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-16x16.png"
        sizes="16x16"
      />
    </Head>
    <main className="flex flex-col sm:flex-row items-center">
      <Image
        src="/me.jpg"
        alt="Picture of Carmelo Scandaliato"
        width={200}
        height={200}
        layout="fixed"
        priority={true}
        className="rounded-full"
      />
      <section className="mt-6 sm:mt-0 sm:ml-6 sm:pl-6 sm:border-l-2 border-white flex flex-col items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
          Carmelo Scandaliato
        </h1>
        <h2 className="mt-1 md:mt-2 text-2xl md:text-3xl font-bold text-lightBlue-300  text-center sm:text-left">
          Software Engineer
        </h2>

        <ul className="mt-5 sm:mt-3">
          {contactInfo.map(({ icon, text, link }) => (
            <p className="mt-2 sm:mt-4 flex items-stretch" key={text}>
              <div className="w-6 sm:w-8 flex items-center">
                <FontAwesomeIcon icon={icon} className="flex-grow text-white" />
              </div>
              <p className="ml-2 mb-0.5 sm:mb-0 sm:ml-3 sm:text-lg md:text-xl">
                <a
                  href={link}
                  className="hover:underline hover:text-white text-blueGray-100"
                >
                  {text}
                </a>
              </p>
            </p>
          ))}
        </ul>
      </section>
    </main>
  </div>
)

export default Home
