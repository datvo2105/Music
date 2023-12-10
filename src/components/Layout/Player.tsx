import {MouseEventHandler, useEffect, useState} from 'react'
import {
    Volume,
    Volume1,
    Volume2,
    VolumeX,
    SkipForward,
    SkipBack,
    Repeat2,
    Shuffle,
    PlayCircle,
    PauseCircle,
    Heart,
    MoreHorizontal,
} from 'lucide-react'
import {Slider} from '../ui/slider'
import {errorValue} from '@/utils/constant'
import {IMusic} from '@/types/music'
import {formatName} from '@/hooks/functions'

type Props = {
    song: IMusic
    toggleMusic: MouseEventHandler
    isPlay: boolean
    progress: number
    setProgress: number
    duration: number
    handleNext: MouseEventHandler
    handlePrev: MouseEventHandler
}

const Player = ({song, isPlay, duration, progress, setProgress, toggleMusic, handleNext, handlePrev}: Props) => {
    return (
        <>
            <div className='bg-background fixed z-20 inset-x-0 bottom-0 grid grid-cols-12 items-center text-white h-32 max-h-32'>
                <div className='col-span-3 flex justify-evenly gap-2 items-center mx-5'>
                    <div className='h-28 w-28 rounded-lg overflow-hidden shadow shadow-gray-900'>
                        <img
                            src={song.image}
                            alt=''
                            className='object-cover'
                            onError={({currentTarget}) => {
                                currentTarget.onerror = null // prevents looping
                                currentTarget.src = errorValue.image
                            }}
                        />
                    </div>
                    <div className='text-center truncate w-44'>
                        <b className='text-xl'>{song.name}</b>
                        <p className='text-md'>
                            {formatName(song.author?.firstName || '', song.author?.lastName || '')}
                        </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <button>
                            <Heart />
                        </button>
                        <button>
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className='grid w-5/6 mx-auto'>
                        <div className='row'>
                            <ul className='flex w-2/5 mx-auto justify-around items-center'>
                                <li>
                                    <button>
                                        <Repeat2 />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={handlePrev}>
                                        <SkipBack className='hover:text-secondary' />
                                    </button>
                                </li>
                                <li className='w-20 h-20 flex items-center justify-center'>
                                    <button type='button' onClick={toggleMusic}>
                                        {!isPlay ?
                                            <PlayCircle size={60} strokeWidth={1} />
                                        :   <PauseCircle size={60} strokeWidth={1} className='stroke-secondary' />}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={handleNext}>
                                        <SkipForward className='hover:text-secondary' />
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <Shuffle />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='row mt-2'>
                            <Slider
                                value={[progress]}
                                min={0}
                                max={100}
                                step={duration / 100}
                                // onValueChange={handleChangeProgress}
                                // onValueCommit={handleMoveTime}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-3 flex justify-center'>
                    <div className='w-7/12 flex'>
                        <div className='mr-5'>
                            {/* {volume == 0 ?
                                <VolumeX />
                            : volume < 20 ?
                                <Volume />
                            : volume < 60 ?
                                <Volume1 />
                            :   <Volume2 />} */}
                            <Volume2 />
                        </div>
                        <Slider
                            // value={[volume]}
                            min={0}
                            max={100}
                            step={1}
                            // onValueChange={handleSetVolume}
                            className='volume'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player
