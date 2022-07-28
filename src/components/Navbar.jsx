import { 
  Avatar, 
  Menu,
  Dropdown,
  Button,
} from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  BulbOutlined,
  MenuOutlined
} from '@ant-design/icons';
import logo from "../assets/images/logo.png";

const Navbar = () => {

  const getItem = (label, key, icon) => {
    return {
      label,
      key,
      icon,
    };
  };

  const items = [
    getItem("Home", "1", <HomeOutlined />),
    getItem("Cryptocurrencies", "2", <LineChartOutlined />),
    getItem("News", "3", <BulbOutlined />)
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
            <h1 className="title">CryptoApp</h1>
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
