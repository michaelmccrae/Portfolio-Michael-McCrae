import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import Image from 'next/image';
  import Link from 'next/link';
  import Randy from './randyyoutube.jsx'
  import Keith from './keithyoutube.jsx'


const page = () => {
  return (
     <>
        <div className="">
       
    
              <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Michael McCrae</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/editorial">Editorial</BreadcrumbLink>
              </BreadcrumbItem>
             
            </BreadcrumbList>
          </Breadcrumb>
          </div>  
          <div className="h-4"></div>
                
          <div className="">

<p>I am a media leader versed in all aspects of leading news organizations, from reporting to editing, from anchoring to oganizing conferences. </p>
</div>
<h2>Anchoring</h2>
<p>As an anchor, I&apos;ve conducted over 100 face-to-face CEO interviews. Highlights include Barrick Gold&apos;s <Link href="https://youtu.be/obpqsDveJdY?si=itJGWQtR24RWieem">Mark Bristow</Link>, Newmont&apos;s <Link href="https://youtu.be/mbFUyG32jSQ?si=3ga_uIQFq9rtzOC7">Tom Palmer</Link>, Lundin Mining&apos;s <Link href="https://youtu.be/8pr-Ds5mK90?si=yQcfbcNcUfXkkcAC">Adam Lundin</Link>, and <Link href="https://youtu.be/l3vL8tCdgIs?si=q9mMlFknrmePlub7">Jigar Shah</Link>, director of the Loan Programs Office in the US Department of Energy.</p> <p>I&apos;ve also hosted award shows and news panels. I am an in-demand speaker and moderator.</p>

<Randy />

<p><Link href="https://youtu.be/sNm9V_csm_I?si=-o2bZJxWAjz2Sg1Y">Former World Gold Council chair can&apos;t give up silver</Link> - Wheaton&apos;s Randy Smallwood on precious metals</p>

<Keith />

<p><Link href="https://youtu.be/QdnmQ2CsYzo?si=scyG-vGqTOiGpWAU">&apos;It was a very competitive process&apos;</Link> - First Majestic&apos;s Keith Neumeyer on $970M Gatos acquisition</p>
<h2>Recognition</h2>
    
<p>MINING.com was a Canadian Online Publishing Award (COPA) winner in both the gold and silver categories. A reporter from the team was also a <Link href="https://jackwebster.com/awardees-year-category/?_sort_by_year=2014&_sort_by_category=excellence-in-multimedia-journalism" target="_blank" rel="noopener noreferrer">Jack Webster Foundation finalist</Link>. </p>

<p>At my most recent position at Kitco Mining, the business was also a COPA finalist. </p>

<figure className="">
                  <Image
                  src="/awards-narrow.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="Canadian Online Publishing Awards and Jack Webster Foundation recognition for MINING.com and Kitco Mining."
                />
                <figcaption className="caption"></figcaption>
                </figure>

<h2>Articles</h2>

<p>Here&apos;s a selection of recent articles published by me.</p>

<div className="pl-4"><p>
  <Link href="https://www.linkedin.com/pulse/top-paid-positions-canadian-mines-michael-allan-mccrae-mba-cma/?trackingId=JXQz4CdqRtmCQf99vP2aPQ%3D%3D" target="_blank" rel="noopener noreferrer">
    Top paid positions at Canadian mines
  </Link><br />
  <Link href="https://www.linkedin.com/pulse/lithium-companies-raise-us42-million-october-mccrae-mba-cma/?trackingId=JXQz4CdqRtmCQf99vP2aPQ%3D%3D" target="_blank" rel="noopener noreferrer">
    Lithium companies raise US$42 million in October
  </Link><br />
  <Link href="https://www.kitco.com/news/article/2024-07-31/kinrosss-earnings-jump-40-q2" target="_blank" rel="noopener noreferrer">
    Kinross&apos;s earnings jump 40% in Q2
  </Link><br />
  <Link href="https://www.kitco.com/news/article/2024-07-31/days-easy-cheap-pounds-coming-out-central-asia-are-effectively-over-cameco" target="_blank" rel="noopener noreferrer">
    &apos;The days of easy, cheap pounds coming out of Central Asia are effectively over&apos; - Cameco files Q2
  </Link><br />
  <Link href="https://www.kitco.com/news/article/2024-08-22/lucara-diamond-recovers-one-largest-rough-diamonds-ever-unearthed-stock" target="_blank" rel="noopener noreferrer">
    Lucara Diamond recovers &apos;one of the largest rough diamonds ever unearthed&apos;, stock jumps
  </Link></p>
</div>



</>
        




    
  )
}

export default page