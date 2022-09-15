import React, { useState } from 'react';
import { Layout } from 'antd';
import '../styles/globals.css';
import "antd/dist/antd.css";


import Navbar from '../components/layout/Navbar';

const styles = {
  content: {
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "50px",
    padding: "10px",
  }
};

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState('');
  const [doGoodContract, setDoGoodContract] = useState(null);
  const [volunteerContract, setVolunteerContract] = useState(null);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Navbar
        account={account}
        setAccount={setAccount}
        setDoGoodContract={setDoGoodContract}
        setVolunteerContract={setVolunteerContract} />
      <div style={styles.content}>
        <Component
          {...pageProps}
          account={account}
          doGoodContract={doGoodContract}
          volunteerContract={volunteerContract} />
      </div>
    </Layout>
  )
}

export default MyApp;
