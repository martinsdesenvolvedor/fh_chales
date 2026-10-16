import React,{useEffect,useRef,useState} from 'react';
import {motion,useScroll,useTransform,useReducedMotion} from 'motion/react';
import {IMAGES} from '../data/siteData';
import {Reveal,LinkButton} from './MotionElements';

// Shared closing composition for Home and internal pages.
export function HomeCollageCTA(){
  const ref=useRef<HTMLElement>(null),reduced=useReducedMotion();
  const [mobile,setMobile]=useState(()=>matchMedia('(max-width:767px)').matches);
  useEffect(()=>{const query=matchMedia('(max-width:767px)');const sync=()=>setMobile(query.matches);query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);},[]);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const left=useTransform(scrollYProgress,[.1,.7],[mobile?'-4%':'-10%','0%']);
  const right=useTransform(scrollYProgress,[.1,.7],[mobile?'4%':'10%','0%']);
  const lower=useTransform(scrollYProgress,[.2,.8],[mobile?'0%':'12%','0%']);
  const topY=useTransform(scrollYProgress,[.1,.7],[mobile?8:16,0]);
  const lowerY=useTransform(scrollYProgress,[.2,.8],[mobile?12:24,0]);
  return <section ref={ref} className="fh-collage-cta fh-home-collage" data-motion="collage">
    <div className="fh-shell fh-home-collage-grid">
      <motion.img className="fh-home-collage-a" src={IMAGES.nordic} alt="Referência de cabana integrada à paisagem" style={{x:reduced?'0%':left,y:reduced?0:topY}}/>
      <motion.img className="fh-home-collage-b" src={IMAGES.interior} alt="Interior em madeira da FH Chalés" style={{x:reduced?'0%':right,y:reduced?0:topY}}/>
      <motion.img className="fh-home-collage-c" src={IMAGES.deck} alt="Referência de deck e espaços de convivência" style={{x:reduced?'0%':lower,y:reduced?0:lowerY}}/>
      <div className="fh-collage-copy"><Reveal><p className="fh-eyebrow">O próximo capítulo é seu</p><h2>Vamos dar forma<br/>ao seu lugar<br/>na natureza?</h2><LinkButton href="/contato">Comece seu projeto</LinkButton></Reveal></div>
    </div>
  </section>;
}
