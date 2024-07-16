import { react } from 'react';

function Navbar () {
    return (
        <nav className='font-semibold'>
            <ul className='flex justify-end px-20 py-6 bg-gray-500 text-2xl '>
                <div className='uppercase '>
                    <a href='/login'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>Login</a>
                    <a href='/characters'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>Characters</a>
                    <a href='#'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>Home</a>
                </div>
            </ul>
        </nav>
    )
}
export default Navbar;