
import React ,{ useState ,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/jatin6265')
    //   .then(res => res.json())
    //   .then(data => setData(data))
    // }, [])
    

  return (
    <div className='bg-gray-600 text-white p-4  text-3xl'>Github followers:{data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300}/></div>
  )
}

export default Github

export const  gitHubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/jatin6265')
    return response.json();
}