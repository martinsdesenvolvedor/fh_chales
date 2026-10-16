import React from 'react';
interface FHChalesLogoProps {className?:string;variant?:'full'|'header'|'symbol'|'badge';showSlogan?:boolean;}
/** Original public profile artwork; preserve its lettering, colors and proportions. */
export const FHChalesLogo:React.FC<FHChalesLogoProps>=({className='',variant='header'})=><span className={'fh-brand-mark variant-'+variant+' '+className}><img src="/images/fh-logo-transparente.png" alt="FH Chalés — Onde a natureza encontra a sofisticação" width="1774" height="887"/></span>;
