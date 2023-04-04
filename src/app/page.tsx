// "use client"
import Image from 'next/image'
import React from 'react'

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`,{ cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function page() {
  const blogs= await getBlogs();
  console.log(blogs)
  return (
    <div>
      <div className=' bg-gray-700 grid grid-cols-4 p-5 gap-5'>
        {blogs.items.map((blog:any)=>(

        
        <div className=' bg-white p-5' key={blog.sys.id}>
          {blogs.includes.Asset.map((elem:any)=>(

          
          <div key={blog.fields.image.sys.id}>
            {blog.fields.image.sys.id==elem.sys.id?
          <Image src={"https:" + elem.fields.file.url} alt="test" width={400} height={400} className='h-64'/>:<div></div>}
          </div>
          ))}
          <h1 className=' text-3xl font-semibold py-5'>{blog.fields.title}</h1>
          <p className=' text-md'>{blog.fields.desc}</p>
            <h2 className="font-bold">RS: {blog.fields.price}</h2>
            
        </div>
        ))}
        {/* <div className=' bg-white p-5'>
          <Image src={"/ist.jpg"} alt="test" width={400} height={400} />
          
          <h1 className=' text-3xl font-semibold'>Title test</h1>
          <p className=' text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aliquid vel facere dolor placeat totam architecto, sit minus aperiam quos at 
            consectetur nihil ratione sunt quas vero voluptates iste mollitia qui?</p>
            <h2 className="font-bold">$50.00</h2>
        </div>
        <div className=' bg-white p-5'>
          <Image src={"/ist.jpg"} alt="test" width={400} height={400} />
          
          <h1 className=' text-3xl font-semibold'>Title test</h1>
          <p className=' text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aliquid vel facere dolor placeat totam architecto, sit minus aperiam quos at 
            consectetur nihil ratione sunt quas vero voluptates iste mollitia qui?</p>
            <h2 className="font-bold">$50.00</h2>
        </div>
        <div className=' bg-white p-5'>
          <Image src={"/ist.jpg"} alt="test" width={400} height={400} />
          
          <h1 className=' text-3xl font-semibold'>Title test</h1>
          <p className=' text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aliquid vel facere dolor placeat totam architecto, sit minus aperiam quos at 
            consectetur nihil ratione sunt quas vero voluptates iste mollitia qui?</p>
            <h2 className="font-bold">$50.00</h2>
        </div> */}

      </div>
    </div>
  )
}
