import { ReactNode, useCallback, useEffect, useState } from 'react'

enum State {
  Disabled,
  ImageLoading,
  ImageLoaded,
}

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
  const [state, setState] = useState<State>(State.Disabled)
  const fadingEnabled = state !== State.Disabled
  const imageLoaded = state === State.ImageLoaded

  const imgRenderedHandler = useCallback((imgEl) => {
    const imgLoadedHandler = () => setState(State.ImageLoaded)
    imgEl.addEventListener('load', () => {
      imgLoadedHandler()
      imgEl.removeEventListener('load', imgLoadedHandler)
    })

    imgEl.src = src
    if (srcSet) imgEl.srcset = srcSet
  }, [])

  useEffect(() => {
    setState(State.ImageLoading)
  }, [])

  return (
    <div style={{ position: 'relative', width, height, zIndex: 0 }}>
      {fadingEnabled && (
        <>
          <div
            className="image-placeholder"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              boxSizing: 'border-box',
              opacity: imageLoaded ? 0 : 1,
              transition: `opacity ${Math.round(durationMs / 1000)}s`,
              zIndex: 0,
            }}
          >
            {placeholder}
          </div>
          <img
            ref={imgRenderedHandler}
            {...props}
            src={undefined}
            srcSet={undefined}
            width={width}
            height={height}
            decoding="async"
            style={{
              ...props.style,
              position: 'absolute',
              opacity: imageLoaded ? 1 : 0,
              transition: `opacity ${Math.round(durationMs / 1000)}s`,
            }}
          />
        </>
      )}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: '.image-placeholder{display:none}',
          }}
        ></style>
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
