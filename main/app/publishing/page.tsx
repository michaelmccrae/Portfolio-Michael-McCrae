import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const page = () => {
  return (
    <>

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

    <div>
        <p>In the 2010s, the company that owned the domain MINING.com wanted to monetize it. The site was a portal, but it had a limited audience and not much interest from advertisers. Following the same model as Business Insider and Huffington Post, MINING.com became a digital-native news site. While competitors were focused on maintaining their print business, MINING.com dominated the digital space as reading habits shifted. MINING.com became the leading news site in the resource sector. The site had over 1.2 million pageviews and a massive email list of 500,000 subscribers. </p> 
        
        <p>MINING.com needed a revenue model. The company that owned MINING.com had existing relationships with junior miners, but revenue from sponsorship was small. Turnover was high. MINING.com turned its focus to large mining equipment and suppliers, companies that were looking to grow their digital presence now that print was waning. MINING.com signed up Fortune 500 companies like Exxon and Caterpillar. Deal size was in the six figures, and renewal rates were high. </p>
    
    </div>
    </>
  )
}

export default page