import Head from 'next/head'
import ContactInfo from '../components/contact-info'
import ImageFadeIn from '../components/image-fade-in'

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
        alt="Carmelo Scandaliato"
        width={216}
        height={216}
        placeholder={
          <img
            aria-hidden="true"
            alt=""
            src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwUGCP/EACUQAAECBQQBBQAAAAAAAAAAAAECAwAFERIhBAYHMRQiNEFSov/EABUBAQEAAAAAAAAAAAAAAAAAAAMG/8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAYQQFETFR/9oADAMBAAIRAxEAPwBnOuWTN9VLpx7NjSvo9NHVBBBTdlJCSCm85B6GO4ulc5bHqaTpoj4JQvP5jM+7FK8ptFxtvrSuOzAU6h4JADrgFPsYEOyXKPI0AAXh+qoH2f/Z"
            style={{
              filter: 'blur(0.8rem)',
            }}
            className="w-full h-full rounded-full"
          />
        }
        durationMs={500}
        containerClassName="rounded-full overflow-hidden select-none"
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
