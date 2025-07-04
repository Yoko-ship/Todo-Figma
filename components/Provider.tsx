'use client'
import React from "react";
import { makeStore } from "@/store/store";
import { Provider } from "react-redux";

const store = makeStore();
const ProviderComponent: React.FC<{ children: any }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComponent;
