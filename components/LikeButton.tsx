import React, {useState,useEffect} from 'react'
import { MdFavorite } from 'react-icons/md'
import useAuthStore from '@/store/authStore'

interface IPorps{
    handleLike:()=>void;
    handleDislike:()=>void;
    likes: any[]
}
const LikeButton = ({likes,handleLike,handleDislike}:IPorps) => {
    const [alreadyLike, setAlreadyLike] = useState(false)
    const {userProfile} = useAuthStore()
    const filterLikes = likes?.filter((item) => item._ref === userProfile?._id)
    useEffect(()=>{
        if(filterLikes?.length > 0){
            setAlreadyLike(true)
        }else{
            setAlreadyLike(false)
        }
    },[filterLikes,likes])

  return (
    <div className='flex gap-6'>
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLike ? (
           <div 
            onClick={handleDislike}
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
            >
            <MdFavorite className='text-lg md:text-2xl'/>
           </div> 
        ): (
           <div 
            onClick={handleLike}
            className="bg-primary rounded-full p-2 md:p-4 "
            >
            <MdFavorite className='text-lg md:text-2xl'/>
           </div> 
        )}
        <p className='text-md font-semibold'>{likes?.length ||0}</p>
      </div>
    </div>
  )
}

export default LikeButton
