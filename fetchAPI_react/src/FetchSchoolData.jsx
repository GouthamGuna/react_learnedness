import React from 'react'
import axios, * as others from 'axios';
import { useEffect, useState } from 'react'

export default function FetchSchoolData() {
    const [schoolData, setSchoolData] = useState('Nothing here');

    const fetchData = () => {
        axios.get("http://localhost:8080/school/fetchAll").then((res) => {
           setSchoolData(res.data);
        })
    }

    // useEffect(() => {
    //     fetchData();
    //   }, []);

  return (
    <React.Fragment>
        <h1>FetchSchoolData</h1>
        <p>{JSON.stringify(schoolData)}</p>
        <button onClick={fetchData}>Click Me!</button>
    </React.Fragment>
  )
}
