import React from 'react';
import {Reveal,Parallax,LinkButton} from './MotionElements';
import {IMAGES} from '../data/siteData';
export function Testimonials(){return <section className="fh-brand-statement"><Parallax src={IMAGES.real} alt="Chalé publicado pela FH Chalés"/><div className="fh-statement-shade"/><Reveal className="fh-shell fh-statement-copy"><p className="fh-eyebrow">O que nos move</p><blockquote>“Aqui na FH Chalés a qualidade está sempre em primeiro lugar.”</blockquote><a href="https://www.instagram.com/fhchales/p/DWZEtAYkgms/" target="_blank" rel="noreferrer">FH Chalés · Nosso compromisso ↗</a><LinkButton href="/contato" light>Vamos conversar</LinkButton></Reveal></section>;}
