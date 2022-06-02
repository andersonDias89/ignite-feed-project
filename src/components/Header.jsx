import Logo from '../assets/logo.png'

export const Header = () => {
    return (
        <header className="w-full h-16 bg-box flex items-center justify-center">
            <div className='flex items-center justify-center'>
                <img className='w-10' src={Logo} alt="Logo do ignite" />
                <h1 className='text-white'>Ignite Feed</h1>
            </div>
        </header>
    )
}