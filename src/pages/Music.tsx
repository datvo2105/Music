import {IMusic} from '@/types/music'
import ListMusic from '@/components/Music/ListMusic'
import {useEffect, useState} from 'react'
import {getAllMusic} from '@/services/music.service'

const Music = () => {
    const [listSong, setListSong] = useState<IMusic[]>()
    useEffect(() => {
        getAllMusic().then((res) => {
            setListSong(res.element)
        })
    }, [])

    return (
        <>
            <div className='ml-6'>
                <div>
                    <b className='text-4xl font-extrabold'>Music</b>
                </div>
                <div className={`w-full h-[850px] mt-5 overflow-y-scroll`}>
                    <ListMusic listSong={listSong || []} />
                    <div className='grid grid-flow-col py-2'></div>
                </div>
            </div>
        </>
    )
}

export default Music
