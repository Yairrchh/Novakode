import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackEvent, trackPageView } from '../lib/metaPixel'

function MetaPixel() {
  const { pathname } = useLocation()

  useEffect(() => {
    trackPageView()
  }, [pathname])

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const href = link.getAttribute('href')
      if (href.includes('wa.link')) {
        trackEvent('Contact', { content_name: 'whatsapp' })
      } else if (href.startsWith('mailto:')) {
        trackEvent('Contact', { content_name: 'email' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default MetaPixel
