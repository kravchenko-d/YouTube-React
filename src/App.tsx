import './components/styles/main.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Children, useContext, useEffect, useState } from 'react'
import { Video, VideoContext } from './Context'
import VideoList from './components/VideoList'

function App() {

const {videos, activeCategory} = useContext(VideoContext)

  // useEffect(() => {
  //   const v = videos
  // }, [])

  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])

  useEffect(() => {
    setFilteredVideos(videos.filter((video: any) => activeCategory === video.category))
  }, [videos, activeCategory]
  )

  return (
    <>
    <Header/>
      <div className='youtube'>
        <Sidebar/>
        <VideoList videos={activeCategory === 'Все' ? videos : filteredVideos}/>
      </div>
    </>
  )
}

export default App