import { HiOutlineChatBubbleLeft } from "react-icons/hi2"
import { HiBookmark } from 'react-icons/hi'


function RedditCard() { 

    return (
        <div className="mt-4 p-3 bg-white rounded-xl border border-gray-600">
            <p className="text-sm">Subreddit image, posted by, and timestamp</p>
            <h2 className="text-2xl font-bold">Title of the Reddit post</h2>
            <p className="text-lg">Body of the Reddit post</p>
            <img 
                src="src\assets\reddit-logo.svg" 
                alt="Potential image of reddit post" 
                className="w-full mx-auto h-16"
            />
            <div className="flex items-center">
                <HiOutlineChatBubbleLeft />
                <p className="text-base pr-2">Comments</p>
                <HiBookmark />
                <p>Save</p>
            </div>
        </div>
    )
}

export default RedditCard;