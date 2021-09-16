import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from "react-spinners/BounceLoader";
import './style.scss'

function GlobalLoading() {
  return (
    <div className="global-loading">
      <LoadingOverlay
        active={true}
        spinner={<BounceLoader />}
      >
      </LoadingOverlay>
    </div>
  )
}

export default GlobalLoading
