import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {container, navLinkItem, navLinks, navLinkText, heading, siteTitle} from './layout.module.css'

export class LayoutProps {
    pageTitle?: string;
    children?: any;
}

const Layout = (layout: LayoutProps) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{layout.pageTitle}</h1>
                {layout.children}
            </main>
        </div>
    )
}

export default Layout
