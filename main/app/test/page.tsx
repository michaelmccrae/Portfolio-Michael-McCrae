import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
     <div>
    
          <h1>Hello</h1>
    
          <h2>My name is Michael McCrae</h2>
          
          <p>I'm a media leader with 20+ years of experience uncovering emerging trends and driving revenue growth.</p>
    
          <p>I was co-founder and publisher of MINING.com. <Link href="/dashboard">Our team set a strategy</Link> that grew the site to over 1.2 million pageviews, along with a massive email list of 500,000 subscribers. Advertisers included Fortune 500 companies like Exxon and Caterpillar.</p>

          <Image
          src="/michael-mccrae-big-spotlight.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          />

          <p>I have led <Link href="/dashboard">award-wining editorial teams</Link>, as well as written extensively on resources and business. </p>

          <p>I am comfortable in front of the camera. </p>

          <p>I know how to model data. I used to work in R to plot mining data. I am lately working more with Typescript to build web apps.</p>
    
                  
    
          
    
          
    
          </div>
  )
}

export default page