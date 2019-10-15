import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components';

import initStore from './init-store'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable-ssr-addon';
const manifest = require('../../dist/react-loadable-ssr-addon.json');

const renderApp = (location, plainPartialState, routerContext={}) =>{
  const store = initStore(plainPartialState)
  const sheet = new ServerStyleSheet();

  const modules = new Set();
  const appHtml = ReactDOMServer.renderToString(
                    sheet.collectStyles(
                          <Loadable.Capture report={moduleName => modules.add(moduleName)}>
                              <Provider store={store}>
                                <StaticRouter location={location} context={routerContext}>
                                  <App />
                                </StaticRouter>
                              </Provider>
                          </Loadable.Capture>
                              )
                    )
  const styles = sheet.getStyleTags();
   const head = Helmet.rewind()

   const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)]);

const scripts = bundles.js || [];
   
  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Itim|Cambo|Gentium+Book+Basic|Bangers&display=swap|Proxima+Nova|proxima-nova|sans-serif|Poppins|Helvetica|Arial|Merriweather|Arial" rel="stylesheet">
        ${styles}
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
        
       </head>
      <body style="overflow-x:hidden;">
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        ${scripts.map(script => {
          return `<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/${script.file}"></script>`
        }).join('\n')}
      </body>
    </html>`
  )
}

export default renderApp