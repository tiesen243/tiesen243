import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { fonts } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import '@/styles/dracula.css'
import '@/styles/globals.css'
import { MdxComponents } from '@/components/mdx-components'
const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <main className={cn('container flex-grow font-sans', fonts)}>
      <BreadCrumbs
        items={[
          { href: '/#about', label: '~' },
          { href: '/blog', label: 'Blog' },
        ]}
      />

      <MDXProvider components={MdxComponents}>
        <article className="mx-auto max-w-screen-md">
          <Component {...pageProps} />
        </article>
      </MDXProvider>
    </main>
    <Footer />
  </ThemeProvider>
)

export default RootLayout
