import { ReactNode, useEffect, useRef, useState } from 'react'

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
> = ({
  src,
  srcSet,
  width,
  height,
  placeholder,
  durationMs = 500,
  ...props
}) => {
  const fadingImage = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (fadingImage.current === null) return

    const imgLoadHandler = () => setLoaded(true)

    fadingImage.current.addEventListener('load', imgLoadHandler)
    fadingImage.current.src = src
    if (srcSet) fadingImage.current.srcset = srcSet

    return () =>
      fadingImage.current?.removeEventListener('load', imgLoadHandler)
  }, [fadingImage])

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
        ref={fadingImage}
        {...props}
        src={undefined}
        srcSet={undefined}
        width={width}
        height={height}
        decoding="async"
        style={{
          ...props.style,
          position: 'absolute',
          opacity: loaded ? 1 : 0,
          transition: `opacity ${Math.round(durationMs / 1000)}s`,
        }}
      />
      <noscript>
        <img
          src={src}
          width={width}
          height={height}
          decoding="async"
          {...props}
          style={{ ...props.style, transform: 'rotate(0)' }}
        />
      </noscript>
    </div>
  )
}

export default ImageFadeIn
