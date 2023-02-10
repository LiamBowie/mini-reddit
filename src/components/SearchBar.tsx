import { HiSearch } from 'react-icons/hi'

function SearchBar() { 

    return (
        <form action="" className="flex justify-between w-full max-w-md space-x-6">
                <div className="relative flex items-center w-full text-gray-400 focus-within:text-gray-600">
                    <HiSearch className="h-5 w-5 absolute ml-3 pointer-events-none" />
                    <input 
                        type="search" 
                        name="search"
                        placeholder="Search Reddit" 
                        aria-label="Search reddit"
                        className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl ring-1 ring-gray-300 focus:ring-gray-600 focus:ring-2"
                    />
                </div>
                <button className="px-5 rounded-2xl ring-1 ring-gray-300 hover:ring-2 hover:ring-gray-600 ">
                        Search
                </button>
        </form>
    )
}

export default SearchBar;
