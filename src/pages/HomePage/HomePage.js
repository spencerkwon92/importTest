import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [isLoading, setLoading] = useState(true);
  // const useEffect(()=>{

  // },[])

  return <div>{isLoading && <h1>We are bring the Data...</h1>}</div>;
}
