const NewsTab = (props) => {
  return (
    <>
    
      <div 
      onClick={() => window.open(props.url, "_blank")}
      className='flex items-center justify-between px-10 w-full py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>

          <div className="w-[70%]">
            <h1 className='text-4xl font-bold'>{ props.title }</h1>
            <h3 className='text-lg font-medium'>{ props.description }</h3>
          </div>
          <div className='h-full w-[25%] flex items-center bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${props.urlToImage})` }}>
          
          </div>

      </div>   
    </>
  )
}

export default NewsTab