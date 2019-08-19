import React from "react"

import { Layout } from "antd"

import "antd/dist/antd.css"

const { Header, Footer } = Layout

const Page = ({ children }) => (
  <Layout style={{ height: "100vh" }}>
    <Header></Header>
    {children}
    <Footer style={{ height: "50px", padding: 0 }}>Footer</Footer>
  </Layout>
)

export default Page
