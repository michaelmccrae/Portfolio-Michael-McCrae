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
  import Randy from './randyyoutube.jsx'
  import Keith from './keithyoutube.jsx'

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
                    <BreadcrumbLink href="/anchoring">Anchoring</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              </div> 
        
        <p>As an anchor, I've conducted over 100 face-to-face CEO interviews. Highlights include <Link href="https://youtu.be/obpqsDveJdY?si=itJGWQtR24RWieem">Barrick Gold's Mark Bristow</Link>, <Link href="https://youtu.be/mbFUyG32jSQ?si=3ga_uIQFq9rtzOC7">Newmont's Tom Palmer</Link>, <Link href="https://youtu.be/8pr-Ds5mK90?si=yQcfbcNcUfXkkcAC">Lundin Mining's Adam Lundin</Link>, and <Link href="https://youtu.be/l3vL8tCdgIs?si=q9mMlFknrmePlub7">Jigar Shah, director of the Loan Programs Office in the US Department of Energy</Link>. I've also hosted award shows and news panels. I am an in-demand speaker and moderator.</p>

    

    <Randy />

    <p><Link href="https://youtu.be/sNm9V_csm_I?si=-o2bZJxWAjz2Sg1Y">Former World Gold Council chair can't give up silver - Wheaton's Randy Smallwood on precious metals</Link></p>

<Keith />

    <p><Link href="https://youtu.be/QdnmQ2CsYzo?si=scyG-vGqTOiGpWAU">'It was a very competitive process' - First Majestic's Keith Neumeyer on $970M Gatos acquisition</Link></p>

    
    
    
    
    
    
    
    </div>
    </>
  )
}

export default page