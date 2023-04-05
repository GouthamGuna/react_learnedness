import React from 'react'
import Link from 'next/link'
import '../styles/global.css'
import {useRouter} from 'next/router'
import Footer from './footer'

const _app = ({Component, pageProps}) => {
    const router = useRouter();

  return (
    <>
        <h1>Our Site</h1>
        <nav className='header-nav'>
            <ul>
                <li>
                    <Link className={router.pathname == '/' ? "active" : ""} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={router.pathname == '/blog' ? "active" : ""} href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link className={router.pathname == '/about' ? "active" : ""} href='/about'>About</Link>
                </li>
            </ul>
        </nav>
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default _app