import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

import { MdxComponents } from '@/components/mdx-components'
import '@/styles/dracula.css'
import '@/styles/globals.css'
import { fonts } from '@/lib/fonts'

const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider components={MdxComponents}>
      <main className={`container flex-grow font-sans ${fonts}`}>
        <Component {...pageProps} />
      </main>
      <Footer className={`font-sans ${fonts}`} />
    </MDXProvider>
  </ThemeProvider>
)

export default RootLayout
