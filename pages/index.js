import {
  Icon,
  Row,
  Col,
  Layout,
  Carousel,
} from 'antd';
import Link from 'next/link'
import "../style.less";

const {
  Header, Content,
} = Layout;

export default () => (
  <Layout>
    <Header>
      <Row justify="space-around" type="flex" style={{ background: '#162E58' }}>
        <Col span={20}>
          <Row justify="space-around" type="flex" style={{ color: '#ffffff' }}>
            <Col span={12} md={12} xs={24}>
              <span><Icon type="home" theme="filled" /> The 2018–19 UEFA Champions League</span>
            </Col>
            <Col span={12} md={12} xs={0}>
              <a className="ml-30 float-right" style={{ color: '#ffffff' }}><Icon type="user" /> Login/Register</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>

    <Row justify="space-around" type="flex" >
      <Col span={20} style={{
        textAlign: 'right',
        paddingTop: '30px',
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        textTransform: 'uppercase',
        color: '#162E58'
      }}>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/groups">
            <a>
              UEFA Clubs
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Competition Schedule
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Ranking
            </a>
          </Link>
        </div>
      </Col>
    </Row>
    <Row justify="space-around" type="flex">
      <Col span={20} style={{ paddingTop: '30px' }}>
        <Content>
          <div>
            <Carousel autoplay>
              <div>
                <img src="/static/images/banner1.jpg" />
              </div>
              <div>
                <img src="/static/images/banner2.jpg" />
              </div>
              <div>
                <img src="/static/images/banner3.jpg" />
              </div>
            </Carousel>
          </div>
        </Content>
      </Col>
    </Row>


    <Row justify="space-around" type="flex" style={{ background: '#162E58', color: '#ffffff' }}>
      <Col md={8} xs={20} style={{ height: '40px', display: 'flex' }}>
        <div style={{ margin: 'auto 0px' }}>
          &copy; The bored days in FA
        </div>
      </Col>
      <Col md={8} xs={20}>
        <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="facebook" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="instagram" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="google" />
        </div>
      </Col>
    </Row>

  </Layout>
)
