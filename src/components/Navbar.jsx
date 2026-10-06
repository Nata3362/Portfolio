import { useEffect, useRef, useState } from 'react'

const links = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Education and Work Experience', '#education'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

const Navbar = ({ theme, onToggleTheme }) => {
  const navRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(links.length)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateLinks = () => {
      if (!navRef.current) return

      const width = navRef.current.clientWidth
      const reservedWidth = 100
      const gapWidth = 24
      let usedWidth = 0
      let count = 0

      for (const [label] of links) {
        const linkWidth = label.length * 8 + 10

        if (
          usedWidth + linkWidth + reservedWidth + gapWidth <= width
        ) {
          usedWidth += linkWidth + gapWidth
          count++
        } else {
          break
        }
      }

      setVisibleCount(count)
    }

    updateLinks()

    const observer = new ResizeObserver(updateLinks)
    observer.observe(navRef.current)

    return () => observer.disconnect()
  }, [])

  const visibleLinks = links.slice(0, visibleCount)
  const overflowLinks = links.slice(visibleCount)

  return (
    <nav className='theme-nav sticky top-0 z-50 px-8 md:px-16 lg:px-24'>
      <div
        ref={navRef}
        className='container mx-auto py-2 flex items-center justify-between'
      >
        <div className='flex gap-6 overflow-visible'>
          {visibleLinks.map(([label, href]) => (
            <a key={href} href={href} className='theme-link whitespace-nowrap'>
              {label}
            </a>
          ))}

          {overflowLinks.length > 0 && (
            <div className='relative'>
              <button
                type='button'
                className='theme-link'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ...
              </button>

              {isMenuOpen && (
                <div className='absolute left-0 top-8 z-10 flex min-w-48 flex-col gap-3 rounded bg-gray-900 p-4 shadow-lg'>
                  {overflowLinks.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className='theme-link'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <button
          type='button'
          onClick={onToggleTheme}
          className='border border-current px-3 py-2 rounded-full whitespace-nowrap'
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar