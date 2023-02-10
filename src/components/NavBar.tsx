import RedditLogo from '../assets/reddit-logo.svg'
import { HiBookmark } from 'react-icons/hi'
import SearchBar from './SearchBar'

function NavBar() { 

    return (
        <div className="fixed top-0 left-0 right-0 h-10 flex justify-between items-center py-7 px-6 border border-black ">
            <img src={RedditLogo} className="h-10 w-10 p-1" />
            <SearchBar />
            <HiBookmark className="w-10 h-10 text-gray-400 hover:text-gray-600" />
        </div>
    )
}

export default NavBar;
