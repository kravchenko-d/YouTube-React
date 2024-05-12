import { FC, useEffect } from "react"
import Video from "./Video"

type Props = {
    videos: any[]
}

const VideoList: FC<Props> = ({videos}) => {
    
    // useEffect(() => {
    //   const v = videos
    //   debugger
    // }, [])
    
    return <div className='menu-content'>
        <div className='allvideos'>
        {
            videos?.map((video) => <Video key={video.id}
                                            preview={video.preview}
                                            title={video.title}
                                            channel={video.channel}
                                            length={video.length}
                                            link={video.link}
                                            views={video.views}
                                            date={video.date}
                                            channel_icon={video.channel_icon}
                                            category={video.category}
                                            />)
        }
        </div>
    </div>
}

export default VideoList