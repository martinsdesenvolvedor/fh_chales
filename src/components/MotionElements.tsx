import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export function Reveal({children, className='', delay=0, image=false}:{children:React.ReactNode;className?:string;delay?:number;image?:boolean}) {
  const reduced=useReducedMotion();
  return <motion.div className={className} data-motion={image?'mask':'reveal'} initial={reduced?false:{opacity:0,y:image?0:30,...(image?{clipPath:'inset(0 0 99.5% 0)'}:{})}} whileInView={{opacity:1,y:0,...(image?{clipPath:'inset(0 0 0% 0)'}:{})}} viewport={{once:true,amount:image?0:.08}} transition={{duration:reduced?0:image?1.05:.75,delay:reduced?0:delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function ScrollTitle({children,className=''}:{children:string;className?:string}) {
  const ref=useRef<HTMLHeadingElement>(null);const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:['start 90%','end 45%']});
  const words=children.split(' ');
  return <h2 ref={ref} className={'fh-scroll-title '+className} aria-label={children}>{words.map((word,i)=><Word key={i} progress={scrollYProgress} range={[i/words.length,(i+1)/words.length]} reduced={!!reduced}>{word}</Word>)}</h2>;
}
function Word({children,progress,range,reduced}:any){const opacity=useTransform(progress,range,[.22,1]);return <motion.span aria-hidden="true" style={{opacity:reduced?1:opacity}}>{children} </motion.span>;}
export function Parallax({src,alt='',className='',children,pinned=false}:{src:string;alt?:string;className?:string;children?:React.ReactNode;pinned?:boolean}) {
  const ref=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const y=useTransform(scrollYProgress,[0,1],[40,-40]);
  return <div ref={ref} className={'fh-parallax '+className+(pinned?' fh-parallax-pinned':'')} data-motion={pinned?'pinned-background':'parallax'}><motion.img src={src} alt={alt} style={{y:reduced||pinned?0:y}}/>{children}</div>;
}

export function LinkButton({href,children,light=false}:{href:string;children:React.ReactNode;light?:boolean}){return <a href={href} className={'fh-button'+(light?' light':'')}><span className="fh-dot"/>{children}<span aria-hidden="true" className="fh-button-arrow">↗</span></a>;}
