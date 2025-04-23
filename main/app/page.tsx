import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="">
      <div className="above-fold-main">
      {/* <h1>Hi. My name is <span style={{ color: 'rgba(13, 152, 162, 0.5)' }}>Michael McCrae</span></h1> */}
      <h1>Hi. My name is <Link href="/">Michael McCrae</Link></h1>
      </div>
      {/* <h2>My name is Michael McCrae.</h2> */}
      <p>I'm a media leader with 20+ years of experience uncovering emerging trends, coordinating teams and driving revenue growth.</p>
      <p>I was co-founder and publisher of MINING.com, <Link href="/publishing">a globally recognized brand.</Link></p>
      
      <figure>
        <Image
        src="/spotlight-narrow-just-gradient.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        alt="Picture of the author"
      />
      <figcaption className="caption">I'm on the left. Photo is from Women In Mining, which was profiling business leaders in the resource sector.</figcaption>
      </figure>
      
      <p>I have led <Link href="/publishing">award-wining editorial teams</Link>, as well as written extensively on resources and business. </p>
      <p>I am comfortable in front of the camera. I have <Link href="/dashboard">worked as an anchor</Link>, interviewing Fortune 500 CEOs.</p>
      <p>I know how to <Link href="/dashboard">lead digital transformations</Link>. I have used AI tools extensively to increase productivity. I mostly know R and JavaScript. </p>
      <p>Away from work, I like the outdoors. I was an executive on the British Columbia Mountaineering Club. I am bad at wing foil. My son and I are working on our bread making skills.</p>
      <p>Find me on <Link href="/dashboard">X</Link> or <Link href="/dashboard">LinkedIn</Link>. You can also <Link href="/dashboard">contact me</Link>.</p>
      
      
    </div>
  )
}

export default page