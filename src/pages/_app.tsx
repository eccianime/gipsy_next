import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from 'next/app';
import Head from "next/head";
import { NextRouter } from "next/router";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../redux/store';
import BasicLayout from "../layout";

function MyApp({ Component, pageProps }: AppProps & { Component: { layout: any } }) {
  const Layout = Component.layout || (({ children }: any) => <BasicLayout>{children}</BasicLayout>);
  return (
    <SSRProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Gipsyy - Reserve a sua passagem de ônibus para todo o Brasil, Portugal e Europa com a Gipsyy. Uma nova forma de viajar sem limites</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </SSRProvider>
  );
}

MyApp.getInitialProps = async ({ Component, router, ctx }: { Component: NextComponentType, router: NextRouter, ctx: NextPageContext }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
