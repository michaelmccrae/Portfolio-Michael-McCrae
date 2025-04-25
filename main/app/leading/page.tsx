import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <>
    <div className="flex flex-col gap-4">
    <div className="">

          <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Michael McCrae</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/publishing">Publishing</BreadcrumbLink>
          </BreadcrumbItem>
         
        </BreadcrumbList>
      </Breadcrumb>
      </div>

      <figure className="">
              <Image
              src="/dg-laughing-narrow.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="Michael McCrae at Deutsche Goldmesse with Paul Harris and Kai Hoffmann."
            />
            <figcaption className="caption">I am teeing up a news panel in May 2023 at Deutsche Goldmesse in Frankfurt, Germany. From left to right is Paul Harris, Kai Hoffmann and Michael McCrae.</figcaption>
            </figure>
            </div>

    <div>
          <h2>Business Challenge</h2>
          <p>In the 2010s, the company that owned the domain MINING.com wanted to monetize it. The site was a portal, but it had a limited audience. MINING.com needed a revenue model. The company that owned MINING.com had existing relationships with junior miners, but revenue from sponsorship was small. Turnover was high. </p>
          
          <h2>Solution</h2>
          <p>Following the same model as Business Insider and Huffington Post, MINING.com became a digital-native news site. While competitors were focused on maintaining their print business, MINING.com dominated the digital space as reading habits shifted. MINING.com turned its focus to large mining equipment and suppliers, companies that were looking to grow their digital presence now that print was waning.</p>
          <h2>Outcome</h2>
          <p> MINING.com became the leading news site in the resource sector. The site had over 1.2 million pageviews and a massive email list of 500,000 subscribers. MINING.com signed up Fortune 500 companies like Exxon and Caterpillar. Deal size was in the six figures, and renewal rates were high. </p> 
        
    
    
    </div>
    </>
  )
}

export default page