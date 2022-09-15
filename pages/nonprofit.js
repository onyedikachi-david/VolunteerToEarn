import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import Sidebar from '../components/nonprofit/Sidebar';
import MintNFT from '../components/nonprofit/MintNFT';

function Nonprofit({ account, volunteerContract }) {
  const [currentTab, setCurrentTab] = useState("Mint NFT");

  let content;

  switch (currentTab) {
    case "Mint NFT":
      content = <MintNFT account={account} volunteerContract={volunteerContract} />;
      break;
    default:
      content = 'Page not found';
  }

  return <div>
    <Layout width={1000}>
      <Layout.Sider
        width={210}
        className="white-bg-color"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      > 
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Layout.Sider>
      <Layout className="white-bg-color" style={{ padding: '0 24px 24px', minHeight: '92vh' }}>
        <Layout.Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {content}
        </Layout.Content>
      </Layout>
    </Layout>
  </div>;
}

export default Nonprofit;
