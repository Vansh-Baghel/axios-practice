import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCalls = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");

  // Normal axios
  // useEffect(() => {
  //   axios
  //     .get("https://www.dnd5eapi.co/api/ability-scores/cha")
  //     .then((res) => setApiData(res.data))
  //     .catch((error) => setError(error.message));
  // }, []);

  const getApiData = async (base_url) => {
    try {
      const res = await axios.get(base_url);
      setApiData(res.data)
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getApiData("https://www.dnd5eapi.co/api/ability-scores/cha");
  }, []);

  return (
    <>
      <h1>Api Practice</h1>
      <div>{apiData.full_name}</div>
      {error !== "" && <div>{error}</div>}
      <ul>
        {apiData.skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiCalls;
