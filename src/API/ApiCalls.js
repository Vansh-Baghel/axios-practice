import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCalls = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");

  // Normal axios
  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/ability-scores/cha")
      .then((res) => setApiData(res.data))
      .catch((error) => setError(error.message));
  }, []);

  // const getApiData = async (base_url) => {
  //   try {
  //     const res = await axios.get("https://www.dnd5eapi.co/api/ability-scores/cha");
  //     console.log(res)
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <>
      <h1>Api Practice</h1>
      <div>{apiData.full_name}</div>
      {error !== "" && <div>{error}</div>}
    </>
  );
};

export default ApiCalls;
