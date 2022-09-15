import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Card, Typography, Button } from 'antd';
import { SmileOutlined, GiftOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { WidgetProps } from "@worldcoin/id";
import dynamic from 'next/dynamic';
const WorldIDWidget = dynamic<WidgetProps>(() => import('@worldcoin/id').then((mod) => mod.WorldIDWidget), { ssr: false });


const styles = {
  Landing: {
    WebkitBoxPack: "start",
    margin: "10px auto",
    maxWidth: "1000px",
  },
  SubHeader: {
    color: '#3AA628',
    fontSize: '26px',
    marginBottom: '-10px'
  },
  SubHeader2: {
    color: '#3AA628',
    fontSize: '22px',
  },
  TableP: {
    color: '#3AA628',
  },
};

function App() {
  const router = useRouter();
  
  return (
    <div style={styles.Landing}>
      <br />
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
          <Typography.Title style={{ marginTop: "3rem", marginBottom: 0 }}>
            Volunteer to Earn
          </Typography.Title>
          <p style={styles.SubHeader}>Volunteer</p>
          <p style={styles.SubHeader}>Earn DoGood tokens</p>
          <br />
          <div>
          <WorldIDWidget
            actionId="wid_staging_763e32062b992e7dec93f841c0d95044" // obtain this from developer.worldcoin.org
            signal="volunteer"
            enableTelemetry
            onSuccess={(proof) => console.log(proof)}
            onError={(error) => console.error(error)}
          />
          </div>
          <Button
            className="primary-bg-color"
            type="primary"
            size="large"
            onClick={() => router.push(`/nonprofit`)}
          >
            Get STARTED
          </Button>
    
        </Col>
        <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
          <center>
            <img src="/home-img.png" alt="Home" width={300} height={300} />
          </center>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row gutter={16}>
        <Col
          className="gutter-row"
          xs={{ span: 32 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card>
            <center>
              <SmileOutlined style={{ fontSize: "3rem" }} />
              <h2>Volunteer</h2>
              <p>Volunteer with your favorite non-profit organization</p>
            </center>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 32 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card>
            <center>
              <GiftOutlined style={{ fontSize: "3rem" }} />
              <h2>Earn</h2>
              <p>
                Receive NFT tracking your volunteering hours and redeem it for
                DoGood tokens{" "}
              </p>
            </center>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 32 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card>
            <center>
              <DollarCircleOutlined style={{ fontSize: "3rem" }} />
              <h2>Reward</h2>
              <p>Buy company sponsored items with your DoGood tokens</p>
            </center>
          </Card>
        </Col>
      </Row>

      <br />
      <br />
      <br />
      <br />
      <Typography.Title level={2}>Volunteer Leadership Board</Typography.Title>

      <Row gutter={16}>
        <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
          <Card>
            <h2 style={styles.TableP}>Top 5 For The Week</h2>
            <Row gutter={16}>
              <Col className="gutter-row" xs={{ span: 12 }}>
                <h3>Volunteer</h3>
                <p>0x....dfs</p>
                <p>0x....dfs</p>
                <p>0x....dfs</p>
              </Col>
              <Col className="gutter-row" xs={{ span: 12 }}>
                <h3>Hours</h3>
                <p>20</p>
                <p>17</p>
                <p>11</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
          <Card>
            <h2 style={styles.TableP}>Top 5</h2>
            <Row gutter={16}>
              <Col className="gutter-row" xs={{ span: 12 }}>
                <h3>Volunteer</h3>
                <p>0x....dfs</p>
                <p>0x....dfs</p>
                <p>0x....dfs</p>
              </Col>
              <Col className="gutter-row" xs={{ span: 12 }}>
                <h3>Hours</h3>
                <p>20</p>
                <p>17</p>
                <p>11</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <br />
      <br />

      <center>
        <Typography.Title level={2}>Join DoGood</Typography.Title>

        <Button
          className="primary-bg-color"
          type="primary"
          size="large"
          onClick={() => router.push(`/nonprofit`)}
        >
          Get STARTED
        </Button>
      </center>
    </div>
  );
}

export default App;