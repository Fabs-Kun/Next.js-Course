"use client";

import { useState } from "react";

export const ClientComponentOne = () => {
    const [name, setName] = useState("Test")
  return (
    <div>Client Component One</div>
  )
}
