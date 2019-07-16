import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Codepen from "react-codepen-embed"

import Loader from "../loader"
import variationStyles from "./variation.module.scss"

const Variation = ({ title, description, codePenId }) => {
  return (
    <div className={variationStyles.variation}>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <div style={{ marginBottom: "20px" }}>
        {documentToReactComponents(description.json)}
      </div>
      <Codepen
        hash={codePenId}
        user="campbrain"
        defaultTab="result"
        preview={false}
        loader={() => <Loader />}
      />
    </div>
  )
}

export default Variation
