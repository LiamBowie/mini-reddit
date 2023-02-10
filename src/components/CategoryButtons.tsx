

function CategoryButtons() { 
    

    return (
        <div className="mt-16 text-center">
            <button className="m-2 px-5 py-1 rounded-2xl ring-1 ring-gray-300 hover:bg-gray-300 focus:bg-orange-600">Best</button>
            <button className="m-2 px-5 py-1 rounded-2xl ring-1 ring-gray-300 hover:bg-gray-300 focus:bg-orange-600">Hot</button>
            <button className="m-2 px-5 py-1 rounded-2xl ring-1 ring-gray-300 hover:bg-gray-300 focus:bg-orange-600">New</button>
            <button className="m-2 px-5 py-1 rounded-2xl ring-1 ring-gray-300 hover:bg-gray-300 focus:bg-orange-600">Top</button>
            <button className="m-2 px-5 py-1 rounded-2xl ring-1 ring-gray-300 hover:bg-gray-300 focus:bg-orange-600">Rising</button>
        </div>
    )
}

export default CategoryButtons;
