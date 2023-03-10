import RedditLogo from '../assets/reddit-logo.svg'
import { HiBookmark } from 'react-icons/hi'
import SearchBar from './SearchBar'

function NavBar() { 

    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-6 border-b-2 bg-white">
                <img src={RedditLogo} className="h-10 w-10 py-1 mr-4" />
                <SearchBar />
                <HiBookmark className="w-10 h-10 text-gray-400 hover:text-gray-600 hidden sm:block" />
            </div>
            <HiBookmark className="fixed bottom-0 right-0 w-20 h-20 p-3 m-6 bg-slate-600 rounded-full text-gray-400 sm:hidden"/>
        </>
    )
}

export default NavBar;
