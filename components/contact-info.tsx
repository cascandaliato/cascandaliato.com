import EmailIcon from './email-icon'
import GitHubLogo from './github-logo'
import TwitterLogo from './twitter-logo'

type ContactInfo = {
  Icon: React.FC<{ className: string }>
  ariaLabel: string
  content: string
  link: string
}

const contactInfo: ContactInfo[] = [
  {
    Icon: GitHubLogo,
    ariaLabel: 'GitHub profile',
    content: 'github.com/cascandaliato',
    link: 'https://github.com/cascandaliato',
  },
  {
    Icon: TwitterLogo,
    ariaLabel: 'Twitter profile',
    content: 'twitter.com/cascandaliato',
    link: 'https://twitter.com/cascandaliato',
  },
  {
    Icon: EmailIcon,
    ariaLabel: 'Email address',
    content: 'carmelo.scandaliato@gmail.com',
    link: 'mailto:carmelo.scandaliato@gmail.com',
  },
]

const ContactInfo: React.FC<{ className: string }> = ({ className }) => (
  <ul className={className}>
    {contactInfo.map(({ Icon, ariaLabel, content, link }) => (
      <li className="first:ml-0 ml-4 sm:ml-0 mt-1 sm:mt-4" key={content}>
        <a
          href={link}
          className="hover:underline hover:text-white text-blueGray-100 flex items-center outline-none border-2 border-transparent focus-visible:border-black focus-visible:border-dashed rounded-sm -ml-0.5 -my-2 p-0.5"
          aria-label={ariaLabel}
        >
          <Icon className="fill-current text-white h-5 sm:h-8" />
          <p className="hidden sm:block mb-0.5 sm:ml-3 sm:text-lg md:text-xl">
            {content}
          </p>
        </a>
      </li>
    ))}
  </ul>
)

export default ContactInfo
