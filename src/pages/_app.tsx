import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel={'shortcut icon'} href={'/img/icon-512.png'} />
        <link rel={'apple-touch-icon'} href={'/img/icon-512.png'} />
        <link rel={'manifest.json'} href={'manifest.json'} />
        <meta
          name={'description'}
          content={
            'A simple project starter to work whit TypeScript, React, Next.JS and Styled Components'
          }
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
