import Head from 'next/head'
import ImageFadeIn from '../components/image-fade-in'
import ContactInfo from '../components/contact-info'
import ProfilePlaceholder from '../components/profile-placeholder'

const profileImage: (size: number, transform?: string) => string = (
  size,
  transform
) =>
  `https://res.cloudinary.com/cascandaliato/image/upload/w_${size},h_${size},f_jpg,q_75${
    transform ? ',' + transform : ''
  }/carmelo`

const Home: React.FC<{}> = () => (
  <div className="w-full h-screen bg-gradient-to-b sm:bg-gradient-to-r from-blue-600 to-lightBlue-500 sm:from-blue-600 sm:via-lightBlue-500 sm:to-lightBlue-400 flex items-center justify-center text-white font-lato">
    <Head>
      <title>Carmelo Scandaliato</title>
    </Head>
    <main className="flex flex-col sm:flex-row items-center">
      <ImageFadeIn
        src={profileImage(256)}
        // prettier-ignore
        srcSet={`${profileImage(256)} 1x, ${profileImage(640, 'dpr_2.0')} 2x, ${profileImage(1024, 'dpr_3.0')} 3x`}
        alt="Picture of Carmelo Scandaliato"
        width={216}
        height={216}
        placeholder={<ProfilePlaceholder className="fill-current text-white" />}
        durationMs={500}
        className="rounded-full select-none"
      />
      <section className="mt-6 sm:mt-0 sm:ml-6 sm:pl-6 sm:border-l-2 border-white flex flex-col items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left select-all">
          Carmelo Scandaliato
        </h1>

        <h2 className="mt-1 md:mt-2 text-2xl md:text-3xl font-bold text-lightBlue-300  text-center sm:text-left select-none">
          Software Engineer
        </h2>

        <ContactInfo className="mt-3 flex sm:block select-none" />
      </section>
    </main>
  </div>
)

export default Home
