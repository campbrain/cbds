import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Codepen from "react-codepen-embed"

import Loader from "../loader"
import variationStyles from "./variation.module.scss"

const Variation = ({ title, description, codePenId, codePenHeight }) => {
  return (
    <div className={variationStyles.variation}>
      <h2 style={{ marginBottom: "10px" }}>{title && title}</h2>
      <div style={{ marginBottom: "20px" }}>
        {description && documentToReactComponents(description.json)}
      </div>
      <Codepen
        hash={codePenId}
        user="campbrain"
        defaultTab="result"
        height={codePenHeight ? codePenHeight : 300}
        preview={false}
        loader={() => <Loader />}
      />
    </div>
  )
}

export default Variation
