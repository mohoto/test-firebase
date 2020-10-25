import React, {useState} from 'react';
import darkTheme from '@ant-design/dark-theme';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './SiderDemo.css';
import 'antd/dist/antd.css';
import ListContent from '../todo/ListContent';
import Compteur from '../redux-hooks/Compteur';
import Name from '../redux-hooks/Name';
import ContentTitre from '../todo/ContentTitre';
import TitreContextProvider from '../../Context/TitreContext';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SiderDemo() {
  

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    //this.setState({ collapsed });
    setCollapsed(collapsed);
  };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ display: 'flex', justifyContent: 'center' }} >
                <h1>MY APP</h1>
           </Header> 
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
              <ListContent />
              <Compteur />
              <Name />
              <TitreContextProvider >
                  <ContentTitre />
              </TitreContextProvider>

            </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }

export default SiderDemo;