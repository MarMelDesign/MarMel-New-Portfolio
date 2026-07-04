import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { CloseIcon } from '../Home/Icons'
import './CaseLightbox.css'

const CaseLightboxContext = createContext(null)

export function CaseLightboxProvider({ children }) {
  const [image, setImage] = useState(null)

  const open = useCallback((src, alt) => setImage({ src, alt }), [])
  const close = useCallback(() => setImage(null), [])

  useEffect(() => {
    if (!image) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [image, close])

  return (
    <CaseLightboxContext.Provider value={open}>
      {children}
      {image ? (
        <div className="mh-case-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button
            type="button"
            className="mh-case-lightbox__close"
            aria-label="Close image"
            onClick={close}
          >
            <CloseIcon size={20} />
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="mh-case-lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </CaseLightboxContext.Provider>
  )
}

export function useCaseLightbox() {
  return useContext(CaseLightboxContext)
}

export function ZoomableImage({ src, alt, className, wrapClassName }) {
  const open = useCaseLightbox()

  return (
    <button
      type="button"
      className={`mh-case-zoom-btn ${wrapClassName || ''}`}
      onClick={() => open?.(src, alt)}
      aria-label={`Expand image: ${alt}`}
    >
      <img src={src} alt={alt} className={className} />
    </button>
  )
}
