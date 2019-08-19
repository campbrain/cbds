import React from "react"
import { Layout } from "antd"

import Page from "../components/page"

const { Sider, Content } = Layout

const IndexPage = () => {
  return (
    <Page>
      <Layout>
        <Sider
          theme="light"
          style={{
            overflow: "auto",
            height: "calc(100vh - 64px - 50px)",
            position: "fixed",
            left: 0,
          }}
        ></Sider>
        <Content>Content</Content>
      </Layout>
    </Page>
  )
}

export default IndexPage
