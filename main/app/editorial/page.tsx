import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import Image from 'next/image';
  import Link from 'next/link';

const page = () => {
  return (
     <>
        <div className="flex flex-col gap-4">
        <div className="mb-8">
    
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
                
          <div className="">

<p>I led editorial teams at both MINING.com and Kitco Mining. </p>
</div>
<h2>Recognition</h2>
    
    <p>MINING.com was a Canadian Online Publishing Award (COPA) winner. A reporter from the team was also a <Link href="https://jackwebster.com/awardees-year-category/?_sort_by_year=2014&_sort_by_category=excellence-in-multimedia-journalism" target="_blank" rel="noopener noreferrer">Jack Webster Foundation finalist</Link>. </p>

<p>At my most recent position, Kitco Mining was a COPA finalist. </p>

<figure className="">
                  <Image
                  src="/awards-narrow.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="Picture of the author"
                />
                <figcaption className="caption"></figcaption>
                </figure>

<h2>Articles</h2>

<div>
  <p>
    <Link href="https://www.linkedin.com/pulse/top-paid-positions-canadian-mines-michael-allan-mccrae-mba-cma/?trackingId=JXQz4CdqRtmCQf99vP2aPQ%3D%3D" target="_blank" rel="noopener noreferrer">
      Top paid positions at Canadian mines
    </Link>
  </p>
  <p>
    <Link href="https://www.linkedin.com/pulse/lithium-companies-raise-us42-million-october-mccrae-mba-cma/?trackingId=JXQz4CdqRtmCQf99vP2aPQ%3D%3D" target="_blank" rel="noopener noreferrer">
      Lithium companies raise US$42 million in October
    </Link>
  </p>
  <p>
    <Link href="https://www.kitco.com/news/article/2024-07-31/kinrosss-earnings-jump-40-q2" target="_blank" rel="noopener noreferrer">
      Kinross's earnings jump 40% in Q2
    </Link>
  </p>
  <p>
    <Link href="https://www.kitco.com/news/article/2024-07-31/days-easy-cheap-pounds-coming-out-central-asia-are-effectively-over-cameco" target="_blank" rel="noopener noreferrer">
      'The days of easy, cheap pounds coming out of Central Asia are effectively over' - Cameco files Q2
    </Link>
  </p>
  <p>
    <Link href="https://www.kitco.com/news/article/2024-08-22/lucara-diamond-recovers-one-largest-rough-diamonds-ever-unearthed-stock" target="_blank" rel="noopener noreferrer">
      Lucara Diamond recovers 'one of the largest rough diamonds ever unearthed', stock jumps
    </Link>
  </p>
</div>
</div>
</>
        




    
  )
}

export default page