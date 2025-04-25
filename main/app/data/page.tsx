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

              <p>
I have strong data analysis and modelling skills, and I'm proficient in R and JavaScript.

I began working with R to model mining data, finding the Tidyverse particularly effective for conceptualizing data modelling. Tools in RStudio allowed me to easily explore datasets and develop visualizations to better understand the data.

I later transitioned to JavaScript to develop interactive models, utilizing libraries such as D3 and React.

I also use Python, primarily for prototyping within Google Colab or Jupyter notebooks when experimenting with AI models.
</p>

<figure className="">
<Image
src="/paid_positions_joy_plot.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="Picture of the author"/>
<figcaption className="caption"></figcaption>
</figure>


<figure className="">
<Image
src="/sankey_financings_commodities.png"
width={0}
height={0}
sizes="100vw"
className="w-full h-auto"
alt="Picture of the author" />
<figcaption className="caption"></figcaption>
</figure>
    
    </div>
    </>
  )
}

export default page