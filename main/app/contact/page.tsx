import React from 'react'
// import EmailPage from './emailcaptcha'
import JSEmail from './jsemail'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from 'next/image';

const page = () => {

  // const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY


  return (

    <>

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Michael McCrae</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
      
    <div className="h-4"></div>

    <figure className="">
    <Image
    src="/mirror_michael_mccrae.jpg"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto"
    alt="Michael McCrae mirror"/>
    <figcaption className="caption">Self-portrait near Joyce-Collingwood Station during commute home in the 2010s</figcaption>
    </figure>

    <JSEmail />

    </>
    
  )
}

export default page