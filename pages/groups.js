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
    Header
  } = Layout;
  
  export default () => (
   
      <Header>
        <Row justify="space-around" type="flex" style={{ background: '#162E58' }}>
          <Col span={20}>
            <Row justify="space-around" type="flex" style={{ color: '#ffffff' }}>
              <Col span={12} md={12} xs={24}>
                <span><Icon type="home" theme="filled" /> The 2018–19 UEFA Champions League</span>
              </Col>
              <Col span={12} md={12} xs={0}>
                <span className="ml-30 float-right"><Icon type="user" theme="filled" /> Login/Register</span>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
  )