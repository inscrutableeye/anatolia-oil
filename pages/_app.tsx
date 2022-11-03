
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from '../src/chakra/theme'
import Layout from '../src/Components/Layout/Layout'
import { RecoilRoot } from 'recoil'
export default function App({ Component, pageProps }: AppProps) {
  return (
<RecoilRoot>
    <ChakraProvider theme={Theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </RecoilRoot>
  )
  
}
