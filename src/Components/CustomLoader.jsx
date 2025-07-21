import { Flex, Spin } from "antd";
import React from "react";

function CustomLoader() {
  return (
    // <Flex align="center" gap="middle">
    //   <Spin size="small" />
    //   <Spin />
    //   <Spin size="large" />
    // </Flex>
    <div className="flex justify-center items-center h-screen">
      <div className="w-15 h-15 border-6 border-dashed border-red-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default CustomLoader;
