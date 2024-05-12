import { FC } from "react"

type Props = {
    preview: string,
    title: string,
    channel: string,
    length: string,
    link: string,
    views: number,
    date: string,
    channel_icon: string
    category: string
}

const Video: FC<Props> = ({id, preview, title, channel, length, link, views, date, channel_icon, category}) => {
    return <div className='video'>
        <a href={link}>
            <div>
                <span>{length}</span>
                <img src={preview}/>
            </div>
            <div className='video-data'>
                <div>
                    <img src={channel_icon}/>
                </div>
                <div className='description'>
                    <div>{title}</div>
                    <div>{channel}</div>
                    <div className='metadata'>
                        <div>{views} просмотров •</div>
                        <div>{date}</div>
                    </div>
                </div>
            </div>
        </a>
    </div>
}

export default Video