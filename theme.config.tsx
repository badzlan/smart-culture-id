import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Smart Culture ID" />
      <meta property="og:description" content="Platform digital yang memuat informasi tentang budaya dan tradisi dari setiap provinsi di Indonesia. Platform ini bertujuan untuk memperkenalkan, mempromosikan, dan melestarikan kekayaan budaya Indonesia kepada masyarakat Indonesia dan dunia." />
      <link rel="icon" href="../icon.svg" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Smart Culture ID'
    }
  },
  logo: <span><img src="../logo.png" alt="" width="250px"/></span>,
  project: {
    link: 'https://github.com/badzlan/smart-culture-id/',
  },
  primaryHue: 200,
  docsRepositoryBase: 'https://github.com/badzlan/smart-culture-id/blob/main/',
  footer: {
    text: <span>Copyright © {new Date().getFullYear()} - <a href="https://smartcultureid.vercel.app" target="_blank">Smart Culture ID</a>. </span>,
  }
}

export default config
