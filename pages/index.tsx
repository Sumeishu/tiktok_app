import axios from 'axios'
import {Video} from '../types'
import VideoCard from '@/components/VideoCard'
import NoResults from '@/components/NoResults'


interface IPorps{
  videos: Video[]
}
const  Home = ({videos}: IPorps) => {
  console.log(videos)
  return (
    <h1 className='flex flex-col gap-10 videos h-full'>
      {videos.length ?(
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}/>))
      ):(
        <NoResults text={'No Videos'}/>
      )}
    </h1>
  )
}


export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`)
  // console.log(response.data.name)
  return {
    props:{
      videos: data
    }
  }
  
}

export default Home