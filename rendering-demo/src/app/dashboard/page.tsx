"use client";

import { useState } from "react"


import React from 'react'

function Page() {
    const [name, setName] = useState("fab")

    return (
        <div>
            {name}

            <input type="text" onChange={e=> setName(e.currentTarget.value)} />
        </div>
    )
}

export default Page




