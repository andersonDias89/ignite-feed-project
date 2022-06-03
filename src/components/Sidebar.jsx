import bgSidebar from '../assets/img-bg-sidebar.png'

import { RiEdit2Line } from 'react-icons/ri'
import { Avatar } from './Avatar'

export const Sidebar = () => {
    return (
        <aside className="rounded-md bg-box  overflow-hidden mb-4 md:mb-0 w-full md:w-1/4">
            <header>
                <img className='w-full' src={bgSidebar} />
                <div className='flex items-center justify-center -mt-7 flex-col space-y-1 pb-4 border-b border-line'>
                    <Avatar profile="https://avatars.githubusercontent.com/u/95925633?v=4"/>
                    <h2 className='text-md text-white'>Anderson Dias</h2>
                    <span className='text-xs'>Developer</span>
                </div>

                <div className='flex items-center justify-center px-3 py-5'>
                    <button className='hover:bg-green hover:text-white transition-colors flex items-center justify-center border-2 border-green rounded-md text-sm p-2 space-x-1 text-green'>
                        <RiEdit2Line />
                        <span>Editar seu perfil</span>
                    </button>
                </div>
            </header>
        </aside>
    )
}