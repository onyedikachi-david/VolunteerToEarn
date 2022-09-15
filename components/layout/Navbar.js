import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import ERC20Contract from '../../build/contracts/ERC20Token.json';
import VolunteerToEarnContract from '../../build/contracts/VolunteerNFT.json';

const styles = {
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  logo: {
    width: '150px',
  }
};

function Navbar({ account, setAccount, setDoGoodContract, setVolunteerContract }) {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link href="/myaccount">My Account</Link>
          ),
        },
        {
          key: '2',
          label: (
            <p onClick={() => setAccount("")}>Disconnected</p>
          ),
        },
      ]}
    />
  );

  const connetToWallet = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);  
    console.log(provider);

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);

    let contract1 = new ethers.Contract(process.env.NEXT_PUBLIC_DOGOODTOKEN_ADDRESS, ERC20Contract.abi, signer);
    setDoGoodContract(contract1);

    let contract2 = new ethers.Contract(process.env.NEXT_PUBLIC_VOLUNTEERTOEARN_ADDRESS, VolunteerToEarnContract.abi, signer);
    setVolunteerContract(contract2);
  }
  
  return (
    <Layout.Header style={styles.header}>
      <img src="/logo.jpg" alt="Logo" style={styles.logo} />
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          display: "flex",
          fontSize: "17px",
          fontWeight: "500",
          marginLeft: "50px",
          width: "100%",
        }}
        defaultSelectedKeys={["landing"]}
      >
        <Menu.Item key="landing">
          <Link href="/">🏠 Home</Link>
        </Menu.Item>
        <Menu.Item key="nonprofit">
          <Link href="/nonprofit">👥 Nonprofit</Link>
        </Menu.Item>
        <Menu.Item key="reward">
          <Link href="/reward">💰 Reward</Link>
        </Menu.Item>
      </Menu>
      <div style={styles.headerRight}>
      {account
        ? <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button className='primary-bg-color'  type="primary">
              {account.substring(0, 7) + '...' + account.substring(35, 42)}
            </Button>
          </Dropdown>
        : <Button
            className='primary-bg-color'
            style={{ margin: '0 1rem'}}
            type="primary"
            onClick={connetToWallet}
          >
            Connect to Wallet
          </Button>
        }
      </div>
    </Layout.Header>
  )
}

export default Navbar;