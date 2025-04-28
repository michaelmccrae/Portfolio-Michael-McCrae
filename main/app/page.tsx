import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className="">


      <h1>Leading digital transformations</h1>
      <div className="h-4"></div>


      <p>Hi. I&apos;m Michael McCrae. I&apos;m a startup specialist with 20+ years of experience uncovering emerging trends, leading teams and driving revenue growth.</p>
      <p>I was co-founder and publisher of MINING.com, one of the first digital-native publications in its niche. In the 2010s, MINING.com grew to become a <Link href="/leading">globally-recognized brand.</Link> Clients included Fortune 500 companies ExxonMobil and Caterpillar.</p>
      
      <figure>
        <Image
        src="/michael-mccrae-big-spotlight-narrow.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        alt="Michael McCrae behind a spotlight"
      />
      <figcaption className="caption">Michael McCrae is on the left. Photo is from Women In Mining, which was profiling business leaders in the resource sector.</figcaption>
      </figure>

      <p>I know how to <Link href="/data">derive intelligence from complex data</Link>. Machine learning is transforming business. <Link href="https://github.com/michaelmccrae">Using JavaScript and the framework NextJS</Link>, I developed web apps using various AI models. </p>
      
      <p>In any business, communication is key. I have led <Link href="/editorial">award-wining editorial teams</Link>, as well as written extensively on technology, resources and business. I am comfortable in front of the camera, and I have interviewed many leading CEOs.</p>

      <p>I have an MBA and CMA, a certified management accountant designation. My undergraduate degree was in creative writing.</p>
  
      <p>For hobbies, I like the outdoors. I am bad at wingfoiling. I keep an eye on upcoming trips organized by the <Link href="https://bcmc.ca">British Columbia Mountaineering Club</Link>. At home my son and I are work on our bread-making skills.</p>
      
      
      
    </div>
  )
}

export default page