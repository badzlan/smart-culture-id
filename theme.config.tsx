import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Smart Culture ID'
    }
  },
  logo: <span>Smart Culture ID</span>,
  project: {
    link: 'https://github.com/badzlan/nextra-testing/',
  },
  docsRepositoryBase: 'https://github.com/badzlan/nextra-testing/blob/main/',
  footer: {
    text: <span>Copyright © {new Date().getFullYear()} - <a href="https://smartcultureid.vercel.app" target="_blank">Smart Culture ID</a>. </span>,
  }
}

export default config
