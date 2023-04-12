import { useState, useEffect } from "react";
import axios from "axios";
import Advice from "./components/Advice";

function App() {
  const [advice, setAdvice] = useState({});
  const [next, setNext] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setIsLoading(false);
      setAdvice(response.data.slip);
    });
  }, [next]);

  const handleClick = () => {
    setNext(next + 1); //triggers useEffect to fetch new data when 'next' changes in value
  };

  return (
    <div className="container">
      <Advice advice={advice} handleClick={handleClick} isLoading={isLoading} />
    </div>
  );
}

export default App;
