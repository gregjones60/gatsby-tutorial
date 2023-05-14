import * as React from 'react'
import {Link} from 'gatsby'
import {container, navLinkItem, navLinks, navLinkText, heading} from './layout.module.css'

export class LayoutProps {
    pageTitle?: string;
    children?: any;
}

const Layout = (layout: LayoutProps) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
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
