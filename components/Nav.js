import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const links = [
        {
            name: 'Home',
            url: '/',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="var(--color-brand)">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
        },
        {
            name: 'DD-214',
            url: '/dd-214',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="var(--color-brand)">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                </svg>
        },
        {
            name: 'Reports',
            url: '/reports',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="var(--color-brand)">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                </svg>
        },
        {
            name: 'Account',
            url: '/account',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="var(--color-brand)">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
        },
        {
            name: 'Contact',
            url: '/contact',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="var(--color-brand)">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
        },
    ]

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const intercept = (e) => {
        e.preventDefault()
        setIsOpen(false)
        router.push(e.target.href)
    }

    return (

        <div className='w-full font-mono text-sm'>

            {/* Desktop Menu */}
            <nav>
                <ul className="hidden md:fixed md:flex md:border-r flex-col justify-between items-center h-full w-max">

                    {links.map(l => (
                        <li key={l.name} className='w-full h-full flex items-center justify-center hover:bg-gray-100'>
                            <Link href={l.url}>
                                <a
                                    href={l.url}
                                    className={`${router.pathname === l.url ? 'active-nav' : ''} flex flex-col gap-2 items-center justify-center transition-all h-full w-full px-6`}>
                                    {l.icon}
                                    {l.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav>
                {/* Mobile menu */}
                {isOpen &&
                    <ul className='md:hidden left-0 right-0 top-0 bottom-0 pt-20 z-10 text-white bg-brand relative h-screen'>
                        {links.map(path => (
                            <li key={path.name}>
                                <a
                                    href={path.url}
                                    onClick={intercept}
                                    className={`${router.pathname === path.url && 'active-nav'} 
                                        w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                        hover:scale-105 hover:bg-brand/80 transition-all`}>
                                    {path.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                }

                {/* Mobile Hamburger Button */}
                <div className='flex md:hidden justify-between ml-4 w-max space-x-6 pt-4'>
                    <button className='outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
                        {!isOpen ?
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand hover:opacity-80' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                                <path d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                            :
                            <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-4 left-4 z-10 h-12 w-12 text-white hover:opacity-80' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        }
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Nav
