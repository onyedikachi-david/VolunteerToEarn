import React from 'react';
import { Card, Row, Col, Button } from 'antd';

function Shop() {
  return (
    <div>
      <Card style={{ margin: '1rem 0'}}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0" }}>
          Company Sponsored Products
        </h1>
      </Card>
      <Card>
        <Card>
          <Row>
            <Col xs={{ span: 24}} lg={{ span: 10 }}>
              <img src="/sponser1.png" alt="Home" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12,  offset: 2 }}>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>20 Matic tokens</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>For</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>20 DoGood Tokens</p>
              <Button type="primary" disabled>
                Redeem
              </Button>
            </Col>
          </Row>
        </Card>
         <br />
        <Card>
          <Row>
            <Col xs={{ span: 24}} lg={{ span: 10 }}>
              <img src="/sponser2.png" alt="Home" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12,  offset: 2 }}>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>One random CyberPunk NFT</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>For</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>100 DoGood Tokens</p>
              <Button type="primary" disabled>
                Redeem
              </Button>
            </Col>
          </Row>
        </Card>
        <br />
        <Card>
          <Row>
            <Col xs={{ span: 24}} lg={{ span: 10 }}>
              <img src="/sponser3.png" alt="Home" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12,  offset: 2 }}>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>$100 AWS Credit</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>For</p>
              <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>10 DoGood Tokens</p>
              <Button type="primary" disabled>
                Redeem
              </Button>
            </Col>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default Shop;