import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Select, Input, Button, Typography  } from 'antd';
import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_APIKEY });

const layout = {
  labelCol: {
    span: 5,
  },
  style: { maxWidth: "700px" }
};

const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 16,
  },
};

function MintNFT({ volunteerContract }) {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState("");

  const onFinish = async (values) => {
    try{
      setLoading(true);
      console.log(values);

      const volunteerData = JSON.stringify({ charities: values.charities, volunteerAddress:  values.volunteerAddress, volunteerHours: values.volunteerHours });
      const blob = new Blob([volunteerData], {type: "text/plain"});
      const fileToUpload = new File([ blob ], 'volunteerData.json');

      const cid = await client.put([fileToUpload], {
        onRootCidReady: localCid => {
          console.log(`> 🔑 locally calculated Content ID: ${localCid} `)
          console.log('> 📡 sending files to web3.storage ')
        },
        onStoredChunk: bytes => console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
      })

      console.log(`https://dweb.link/ipfs/${cid}`);

      const transaction = await volunteerContract.mintVolunteerNFT(values.volunteerHours, values.charities, values.volunteerAddress, `https://dweb.link/ipfs/${cid}`);
      const tx = await transaction.wait();
      console.log(tx);

      setTransaction(tx.transactionHash);
      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Card style={{ margin: '1rem 0'}}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0" }}>
          Mint Volunteer Hour NFT
        </h1>
      </Card>
      <Card>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="charities"
            label="Charities"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="volunteerAddress"
            label="Volunteer Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="volunteerHours"
            label="Volunteer Hours"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="primary-bg-color" loading={loading}>
              Mint
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        {transaction && <p>Success, {transaction}</p>}
      </Card>
    </div>
  )
}

export default MintNFT;