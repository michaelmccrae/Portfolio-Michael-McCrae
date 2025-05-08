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

              
<p>I have strong data analysis skills. At MINING.com, I modeled data from the business's sister division, Mining Intelligence. I used R to explore datasets and craft stories. In 2014, one of the MINING.com editors was a Jack Webster Awards finalist in the data journalism category.</p>

<p>At Kitco Mining, I used JavaScript and D3 to make slope graphs, as well as <Link href="https://x.com/michaelmccrae/status/1105903869744209920">animated charts for social</Link>.</p>

<figure className="">
<Image
src="/paid_positions_joy_plot.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="A ridgeline plot by Michael McCrae showing pay range by job title at Canadian mines"/>
<p>A ridgeline plot developed by Michael McCrae for Mining Intelligence, showing <Link href="https://www.linkedin.com/pulse/top-paid-positions-canadian-mines-michael-allan-mccrae-mba-cma/?trackingId=gQex2CCdQUuo7u3Xmwiw8A%3D%3D">pay range by job title at Canadian mines</Link>. Data was compiled in 2017.</p>
</figure>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<figure className="">
<Image
src="/sankey_financings_commodities.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="A sankey diagram by Michael McCrae showing resource financings in October 2017" />
<p>A sankey diagram developed by Michael McCrae for Mining Intelligence showing a breakdown of <Link href="https://www.linkedin.com/pulse/lithium-companies-raise-us42-million-october-mccrae-mba-cma/?trackingId=gQex2CCdQUuo7u3Xmwiw8A%3D%3D">financings by resource companies in October 2017</Link>.</p>
</figure>  

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<figure className="">
<Image
src="/topGoldSlope.jpg"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="The world’s top 10 largest gold mining companies based on the miner's production figures reported for 2022 (calendar year)."/>
<p>The world’s <Link href="https://observablehq.com/d/3a6ac5c138eb76ed">top 10 largest gold mining companies</Link> based on the miner's production figures reported for 2022 (calendar year). </p>
</figure>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>



    </div>
    </>
  )
}

export default page