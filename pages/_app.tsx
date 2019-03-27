import App, { Container } from 'next/app'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0
  }

`

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
          <GlobalStyles/>
          <Component {...pageProps} />

      </Container>
    )
  }
}