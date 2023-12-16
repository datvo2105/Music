import {endPoint} from '@/utils/constant'
import {Disc3, Download, Heart, History, Home, Upload} from 'lucide-react'
import {Link} from 'react-router-dom'

const sideMenu = [
    {
        title: 'menu',
        list: [
            {
                title: 'Home',
                icon: <Home />,
                slug: endPoint.home,
            },
            {
                title: 'favourite',
                icon: <Heart />,
                slug: endPoint.favor,
            },
        ],
    },
    {
        title: 'library',
        list: [
            {
                title: 'recent',
                icon: <History />,
                slug: endPoint.recent,
            },
            {
                title: 'Albums',
                icon: <Disc3 />,
                slug: endPoint.albums,
            },
            {
                title: 'Downloads',
                icon: <Download />,
                slug: endPoint.download,
            },
            {
                title: 'Upload',
                icon: <Upload />,
                slug: endPoint.upload,
            },
        ],
    },
]

const Sidebar = () => {
    return (
        <>
            <div className='md:col-span-2 bg-sidebar border border-r md:block hidden'>
                <img src='/src/assets/imgs/logo.png' alt='Logo' className='mx-auto mt-5' />
                {sideMenu.map((menu) => {
                    return (
                        <div className='md:flex md:flex-col' key={menu.title}>
                            <div>
                                <div className='uppercase font-extrabold md:m-4 md:ml-20 md:text-2xl text-base'>
                                    {menu.title}
                                </div>
                                <ul>
                                    {menu.list.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                className='hover:text-secondary hover:cursor-pointer transition-colors duration-150 ease-in-out md:flex md:items-center md:text-xl md:pl-16 md:py-3'
                                                to={item.slug}
                                            >
                                                {item.icon}
                                                <span className='ml-6 font-medium capitalize'>{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Sidebar
