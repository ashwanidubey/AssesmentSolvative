import './App.css';
import Navbar from "./components/Navbar"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import axios from 'axios';
import { useEffect, useState } from 'react';

const host = process.env.REACT_APP_HOST
const XRAPIDAPI_HOST = process.env.REACT_APP_XRAPIDAPI_HOST
const XRAPIDAPI_KEY = process.env.REACT_APP_XRAPIDAPI_KEY

function App() {
  const [data, setData] = useState([]);
  const [serachData,setSearchData]=useState([]);
  const [limit, setLimit] = useState(5)
  const [isFetching, setIsFetching] = useState(true)
  const [countryId, setCountryId] = useState("IN")
  const [count,setCount]=useState(0)
  const [arr,setArr]=useState(["IN","AF","AL","DZ","AD","AO"])
  useEffect(()=>{
    console.log("chal gya",arr[count])
    setCountryId(arr[count])
  },[count])
  useEffect(() => {
    var options = {
      method: 'GET',
      url: `${host}/v1/geo/cities`,

      params: { countryIds: countryId , namePrefix: 'del', limit: limit },
      headers: {
        'x-rapidapi-host': XRAPIDAPI_HOST,
        'x-rapidapi-key': XRAPIDAPI_KEY
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data.data)
      setSearchData(response.data.data)
      setIsFetching(false)
    }).catch(function (error) {
      console.error(error);
    });
    //

    //
  }, [limit,countryId])

  return (
    <div className="App">
      <Navbar data={data} setSearchData={setSearchData} />
      {
        isFetching ?
          <>
            <h1>fetching</h1>
          </> :
          <>
            <Table data={serachData} />
            <Pagination limit={limit} setLimit={setLimit} count={count} setCount={setCount} />
          </>
      }

    </div>
  );
}

export default App;
