import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'

type ContactInfo = {
  icon: IconDefinition
  ariaLabel: string
  content: string
  link: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: faGithub,
    ariaLabel: 'GitHub profile',
    content: 'github.com/cascandaliato',
    link: 'https://github.com/cascandaliato',
  },
  {
    icon: faTwitter,
    ariaLabel: 'Twitter profile',
    content: 'twitter.com/cascandaliato',
    link: 'https://twitter.com/cascandaliato',
  },
  {
    icon: faEnvelope,
    ariaLabel: 'Email address',
    content: 'carmelo.scandaliato@gmail.com',
    link: 'mailto:carmelo.scandaliato@gmail.com',
  },
]

const Home: React.FC<{}> = () => (
  <div className="w-full h-screen bg-gradient-to-b sm:bg-gradient-to-r from-blue-600 to-lightBlue-500 sm:from-blue-600 sm:via-lightBlue-500 sm:to-lightBlue-400 flex items-center justify-center text-white font-lato">
    <Head>
      <title>Carmelo Scandaliato</title>
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

        <ul className="mt-3 flex sm:block">
          {contactInfo.map(({ icon, ariaLabel, content, link }) => (
            <li className="first:ml-0 ml-4 sm:ml-0 mt-1 sm:mt-4" key={content}>
              <a
                href={link}
                className="hover:underline hover:text-white text-blueGray-100 flex items-center"
                aria-label={ariaLabel}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="h-full text-white text-xl sm:text-3xl"
                />
                <p className="hidden sm:block mb-0.5 sm:ml-3 sm:text-lg md:text-xl">
                  {content}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </div>
)

export default Home
