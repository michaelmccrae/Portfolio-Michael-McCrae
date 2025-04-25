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
                    <BreadcrumbLink href="/data">Data Analysis</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              </div> 

              
<p>I have strong data analysis skills. At MINING.com, our sister division Mining Intelligence tracked data from the miners. I modelled the data using the tidyverse and RStudio to explore and create data-driven stories. See my Github for recent projects.</p>

<p> I have switched to JavaScript and the framework NextJS to make web apps.</p>

<figure className="">
<Image
src="/paid_positions_joy_plot.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="A ridgeline plot by Michael McCrae showing pay range by job title at Canadian mines"/>
<figcaption className="caption">A ridgeline plot developed by Michael McCrae for Mining Intelligence, showing <Link href="https://www.linkedin.com/pulse/top-paid-positions-canadian-mines-michael-allan-mccrae-mba-cma/?trackingId=gQex2CCdQUuo7u3Xmwiw8A%3D%3D">pay range by job title at Canadian mines</Link>. Data was compiled in 2017.</figcaption>
</figure>

<figure className="">
<Image
src="/sankey_financings_commodities.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="A sankey diagram by Michael McCrae showing resource financings in October 2017" />
<figcaption className="caption">A sankey diagram showing a breakdown of <Link href="https://www.linkedin.com/pulse/lithium-companies-raise-us42-million-october-mccrae-mba-cma/?trackingId=gQex2CCdQUuo7u3Xmwiw8A%3D%3D">financings by resource companies in October 2017</Link>.</figcaption>
</figure>    
    </div>
    </>
  )
}

export default page