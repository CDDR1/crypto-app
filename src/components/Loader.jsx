import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin tip="Loading..." size="large" />
    </div>
  );
};

export default Loader;
