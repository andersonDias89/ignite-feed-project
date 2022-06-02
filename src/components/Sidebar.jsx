import bgSidebar from '../assets/img-bg-sidebar.png'
import avatarSidebar from '../assets/avatar-sidebar.png'

import { RiEdit2Line } from 'react-icons/ri'

export const Sidebar = () => {
    return (
        <aside className="rounded-md bg-box w-96 overflow-hidden">
            <header>
                <img src={bgSidebar} alt="Background da sidebar" />
                <div className='flex items-center justify-center -mt-7 flex-col space-y-1 pb-4 border-b border-line'>
                    <img src={avatarSidebar} alt="" />
                    <h2 className='text-sm text-white'>Leslie Alexander</h2>
                    <span className='text-xs'>UI Designer</span>
                </div>

                <div className='flex items-center justify-center px-3 py-5'>
                    <button className='hover:border-emerald-700 hover:text-emerald-700 transition-colors flex items-center justify-center border-2 border-green rounded-md text-sm p-2 space-x-1 text-green'>
                        <RiEdit2Line />
                        <span>Editar seu perfil</span>
                    </button>
                </div>
            </header>
        </aside>
    )
}