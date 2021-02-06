import { ReactNode, useEffect, useState } from 'react'

const ImageFadeIn: React.FC<
  {
    src: string
    width: number
    height: number
    placeholder?: ReactNode
    durationMs?: number
  } & Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    'placeholder'
  >
> = ({ src, width, height, placeholder, durationMs = 500, ...props }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const imgLoadHandler = () => setLoaded(true)

    const img = new window.Image()
    img.addEventListener('load', imgLoadHandler)
    img.src = src

    return () => img.removeEventListener('load', imgLoadHandler)
  }, [])

  return (
    <div style={{ position: 'relative', width, height, zIndex: 0 }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          boxSizing: 'border-box',
          opacity: loaded ? 0 : 1,
          transition: `opacity ${Math.round(durationMs / 1000)}s`,
          zIndex: 0,
        }}
      >
        {placeholder}
      </div>
      <img
        src={src}
        width={width}
        height={height}
        decoding="async"
        {...props}
        style={{
          position: 'absolute',
          opacity: loaded ? 1 : 0,
          transition: `opacity ${Math.round(durationMs / 1000)}s`,
        }}
      />
      {/* <noscript>
        <img
          src={src}
          width={width}
          height={height}
          decoding="async"
          {...props}
          style={{ transform: 'rotate(0)' }}
        />
      </noscript> */}
    </div>
  )
}

export default ImageFadeIn
