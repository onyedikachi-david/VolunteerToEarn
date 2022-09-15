import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import Sidebar from '../components/account/Sidebar';
import Overview from '../components/account/Overview';

function Myaccount({ account, volunteerContract, doGoodContract }) {
  const [currentTab, setCurrentTab] = useState("Overview");

  let content;

  switch (currentTab) {
    case "Overview":
      content = <Overview account={account} volunteerContract={volunteerContract} doGoodContract={doGoodContract} />;
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

export default Myaccount;
