import React from 'react'
import { Spinner } from '@blueprintjs/core'

function Loading() {
    return <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "45%"}}>
        <h3>Loading</h3>
        <Spinner />
    </div>
}

export default Loading