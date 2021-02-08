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
    containerClassName?: string
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
  containerClassName,
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
    <div
      style={{
        position: 'relative',
        width,
        height,
      }}
      className={containerClassName}
    >
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
              opacity: imageLoaded ? 0 : 1,
              // transition: `opacity ${Math.round(durationMs / 100) / 10}s`,
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
            style={{
              ...props.style,
              opacity: imageLoaded ? 1 : 0,
              // opacity: 0,
              filter: imageLoaded ? 'blur(0)' : 'blur(0.8rem)',
              transition: `filter ${Math.round(durationMs / 100) / 10}s linear`,
              transitionTimingFunction: 'steps(30,end)',
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
          style={{ ...props.style }}
        />
      </noscript>
    </div>
  )
}

export default ImageFadeIn
