import { 
  Avatar, 
  Menu,
  Dropdown,
  Button,
  Typography
} from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  BulbOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const { Title } = Typography;

const Navbar = () => {

  const getItem = (label, key, icon) => {
    return {
      label,
      key,
      icon,
    };
  };

  const items = [
    getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),
    getItem(<Link to="/cryptocurrencies">Cryptocurrencies</Link>, "2", <LineChartOutlined />),
    getItem(<Link to="/news">News</Link>, "3", <BulbOutlined />)
  ];

  const menu = (
    <Menu
      defaultSelectedKeys={['1']}
      theme="dark"
      items={items}
    />
  );

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo-and-title">
          <div className="logo-container">
            <Avatar size={64} src={logo} />
          </div>
          <div className="title-container">
            <Title className="nav-main-title">CryptoHub</Title>
          </div>
        </div>
        <div className="menu-container">
          {menu}
        </div>
        {/* Display only on mobile */}
        <div className="mobile-menu">
          <Dropdown overlay={menu}>
            <Button>
              <MenuOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
