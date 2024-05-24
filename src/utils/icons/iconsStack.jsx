/* eslint-disable react-refresh/only-export-components */
// components.js
import html from '../../assets/icons/stacks/Html.png';
import javascript from '../../assets/icons/stacks/Javascript.png';
import css from '../../assets/icons/stacks/Css.png';
import react from '../../assets/icons/stacks/React.png';
import reactRouter from '../../assets/icons/stacks/ReactRouter.png';
import sass from '../../assets/icons/stacks/Sass.png';
import nodeJs from '../../assets/icons/stacks/NodeJs.png';
import mongoDb from '../../assets/icons/stacks/MongoDb.png';
import figma from '../../assets/icons/stacks/Figma.png';
import linkedin from '../../assets/icons/socials/Linkedin.png';
import codepen from '../../assets/icons/socials/Codepen.png';
import github from '../../assets/icons/socials/Github.png';
import faGlobe from '../../assets/icons/socials/faGlobe.png';
import viteJs from '../../assets/icons/stacks/ViteJs.png';
import cSharp from '../../assets/icons/stacks/Csharp.png';
import express from '../../assets/icons/stacks/Express Js.png';
import postgres from '../../assets/icons/stacks/Postgres.png';

export const HtmlIcon = () => <img src={html} alt='html icon' className='stack__icon' />;
export const JavascriptIcon = () => <img src={javascript} alt='javascript icon' className='stack__icon' />;
export const CssIcon = () => <img src={css} alt='css icon' className='stack__icon' />;
export const ReactIcon = () => <img src={react} alt='react icon' className='stack__icon' />;
export const ReactRouterIcon = () => <img src={reactRouter} alt='react router icon' className='stack__icon' />;
export const SassIcon = () => <img src={sass} alt='sass icon' className='stack__icon' />;
export const NodeIcon = () => <img src={nodeJs} alt='node icon' className='stack__icon' />;
export const ExpressIcon = () => <img src={express} alt='express icon' className='stack__icon' />;
export const ViteIcon = () => <img src={viteJs} alt='vite icon' className='stack__icon' />;
export const MongodbIcon = () => <img src={mongoDb} alt='mongodb icon' className='stack__icon' />;
export const PostgresIcon = () => <img src={postgres} alt='postgres icon' className='stack__icon' />;
export const FigmaIcon = () => <img src={figma} alt='figma icon' className='stack__icon' />;
export const LinkedinIcon = () => <img src={linkedin} alt='linkedin icon' className='stack__icon' />;
export const GlobeIcon = () => <img src={faGlobe} alt='globe icon' className='stack__icon' />;
export const CodepenIcon = () => <img src={codepen} alt='codepen icon' className='stack__icon' />;
export const GithubIcon = () => <img src={github} alt='github icon' className='stack__icon' />;
export const CSharpIcon = () => <img src={cSharp} alt='cSharp icon' className='stack__icon' />;

export const iconsStack = [
  { name: 'html', component: <HtmlIcon />, description: 'HTML (Hypertext Markup Language) : le langage standard pour créer des pages web.' },
  { name: 'javascript' || 'js', component: <JavascriptIcon />, description: 'JavaScript : un langage de programmation de haut niveau utilisé pour créer des effets interactifs dans les navigateurs web.' },
  { name: 'css', component: <CssIcon />, description: 'CSS (Cascading Style Sheets) : un langage de feuilles de style utilisé pour décrire la présentation d\'un document écrit en HTML ou XML.' },
  { name: 'react', component: <ReactIcon />, description: 'React : une bibliothèque JavaScript pour construire des interfaces utilisateur, maintenue par Facebook.' },
  { name: 'reactRouter', component: <ReactRouterIcon />, description: 'React Router : une bibliothèque de routage pour les applications React, permettant de naviguer entre différentes vues ou pages.' },
  { name: 'scss', component: <SassIcon />, description: 'SCSS (Sassy CSS) : une extension syntaxique de CSS qui permet l\'utilisation de variables, de boucles et d\'importations pour rendre le CSS plus puissant et maintenable.' },
  { name: 'node', component: <NodeIcon />, description: 'Node.js : un environnement d\'exécution JavaScript côté serveur permettant d\'exécuter du code JavaScript sur le serveur.' },
  { name: 'express', component: <ExpressIcon />, description: 'Express : un framework web minimaliste pour Node.js, utilisé pour créer des applications web et des API.' },
  { name: 'viteJs', component: <ViteIcon />, description: 'Vite : un outil de build et un serveur de développement rapide pour les projets JavaScript modernes.' },
  { name: 'mongodb', component: <MongodbIcon />, description: 'MongoDB : une base de données NoSQL orientée documents, utilisée pour stocker des données JSON flexibles.' },
  { name: 'postgres', component: <PostgresIcon />, description: 'PostgreSQL : un système de gestion de bases de données relationnelles open source, connu pour sa robustesse et sa conformité aux standards SQL.' },
  { name: 'figma', component: <FigmaIcon />, description: 'Figma : un outil de conception d\'interface utilisateur en ligne qui permet la collaboration en temps réel.' },
  { name: 'cSharp', component: <CSharpIcon />, description: 'C# (C Sharp) : un langage de programmation orienté objet, développé par Microsoft, largement utilisé pour le développement de logiciels et d\'applications.' },
];


export const iconsSocials = [
  { name: 'linkedin', component: <LinkedinIcon /> },
  { name: 'github', component: <GithubIcon /> },
  { name: 'codepen', component: <CodepenIcon /> },
  { name: 'globe', component: <GlobeIcon /> },
];
