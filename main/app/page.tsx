import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className="">


      <h1>Leading digital transformations</h1>
      <div className="h-4"></div>


      <p>Hi. I&apos;m Michael McCrae. I&apos;m a startup specialist with 20+ years of experience uncovering emerging trends, leading teams and driving revenue growth.</p>
      <p>I was co-founder and publisher of MINING.com, one of the first digital-native publications in the resource sector. In the 2010s, MINING.com grew to become a <Link href="/leading">globally-recognized brand.</Link> Clients included Fortune 500 companies ExxonMobil and Caterpillar.</p>
      
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

      <p>Machine learning is transforming business. Companies need a strategy for conversational AI, either to host their own models or to be discoverable on services like Perplexity and ChatGPT. I am experienced at chatbot development and integration, such as building <Link href="https://github.com/michaelmccrae/deparley">voice agents</Link>. I mostly work with React and the framework NextJS, which I used to build this <Link href="https://github.com/michaelmccrae/Portfolio-Michael-McCrae">portfolio site</Link>.</p>

      <p>I know how to <Link href="/data">derive intelligence from complex data</Link>. I am skilled at data analysis, modelling everything from financial filings to drill results, from site traffic numbers to revenue projections.</p>
      
      <p>In any business, communication is key. I have led <Link href="/editorial">award-wining editorial teams</Link>, as well as written extensively on technology, resources and business. I am comfortable in front of the camera, and I have interviewed <Link href="/editorial">many leading CEOs</Link>.</p>

      <p>I have an MBA and CMA, a certified management accountant designation. My undergraduate degree was in creative writing.</p>
  
      <p>For hobbies, I like the outdoors. I am bad at wingfoiling. I keep an eye on upcoming trips organized by the British Columbia Mountaineering Club. At home my son and I are work on our bread-making skills.</p>
      
      
      
    </div>
  )
}

export default page