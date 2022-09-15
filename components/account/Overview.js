import React, { useEffect, useState } from 'react';
import { Card, Table, Form, Checkbox, Button  } from 'antd';

function Overview({ account, volunteerContract, doGoodContract }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <p>{id.toString()}</p>,
    },
    {
      title: "Charity",
      dataIndex: "charity",
      key: "charity",
      render: (charity) => <p>{charity}</p>,
    },
    {
      title: "Hours",
      dataIndex: "hour",
      key: "hour",
      render: (hour) => <p>{hour.toString()}</p>,
    },
    {
      title: 'Redeem',
      fixed: 'right',
      width: 100,
      render: (nft) => <Checkbox disabled={nft.isRedeemed} onChange={handleCheckBox} value={nft.id.toString()}/>,
    },
  ];

  const [volunteerNFTs, setVolunteerNFTs] = useState([]);
  const [goGoodBalance, setDoGoodBalance] = useState(0);
  const [selectNFT, setSelectNFT] = useState("");
  const [transaction, setTransaction] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(volunteerContract) fetchNFTs();
  }, [volunteerContract])

  useEffect(() => {
    if(doGoodContract) getDoGoodTokenBalance();
  }, [doGoodContract])

  const fetchNFTs = async () => {
    try{
      setLoading(true);
      const nfts = await volunteerContract.fetchUserVolunteerNFTs(account);
      console.log(nfts);
      setVolunteerNFTs(nfts);

      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getDoGoodTokenBalance = async () => {
    try{
      const balance = await doGoodContract.balanceOf(account);
      console.log(balance.toString());
      setDoGoodBalance(balance.toString());

    } catch(error) {
      console.error(error);
    }
  };
  

  const redeemNFTs = async () => {
    try{
      setLoading(true);
      const transaction = await volunteerContract.redeemVolunteerNFT(selectNFT);
      const tx = await transaction.wait();
      console.log(tx);
      
      setTransaction(tx.transactionHash);
      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleCheckBox = (e) => {
    console.log(e);
    setSelectNFT(e.target.value);
  }

  return (
    <div>
      <Card style={{ margin: '1rem 0'}}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0" }}>
          My Volunteer Hour NFT
        </h1>
      </Card>
      <Card>
        <Table columns={columns} dataSource={volunteerNFTs} />
        <Button type="primary" htmlType="submit" className="primary-bg-color" onClick={redeemNFTs} loading={loading}>
          Redeem
        </Button>
        {transaction && <p>Success, {transaction}</p>}
        <br />
        <br />
        <p>1 Volunteering hour can be redeemed for one DoGood token</p>
        <p>DoGood Token Balance: {goGoodBalance / 10 ** 18}</p>
      </Card>
    </div>
  )
}

export default Overview;