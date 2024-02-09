import Css from '../images/css-logo-mobile.png';
import Html from '../images/html-5-logo.png';
import React from '../images/react-logo.png';
import Js from '../images/js-logo.png';
import Express from '../images/express.png';
import Mongo from '../images/mongoDB.png';
import NodeJS from '../images/nodeJS.png';
import TypeScript from '../images/typescript.png';

const card = document.querySelector('.languages-card');
const topIcons = document.querySelector('.top-icons');
const lowerIcons = document.querySelector('.lower-icons');
const header = document.querySelector('.language-header-txt');
const currentLanguages = [Css, Html, React, Js];
const inProgressSkills = [TypeScript, NodeJS, Express, Mongo];

const setImgs = (imgs) => {
  const icons = document.querySelectorAll('.icon');
  let num = 0;
  icons.forEach((icon) => {
    const pic = icon;
    pic.src = imgs[num];
    num += 1;
  });
};

const checkSlide = () => {
  if (header.textContent.includes('Languages')) {
    header.textContent = 'Skills In Progress';
    return setImgs(inProgressSkills);
  }
  header.textContent = 'Languages I Speak';
  return setImgs(currentLanguages);
};

function cardAnimationLoop() {
  topIcons.classList.add('slide-left');
  lowerIcons.classList.add('slide-right');
  header.classList.add('disappear');
  setTimeout(() => {
    checkSlide();
    header.classList.remove('disappear');
    topIcons.classList.remove('slide-left');
    lowerIcons.classList.remove('slide-right');
  }, 600);
  setTimeout(() => {
    cardAnimationLoop();
  }, 6000);
}

cardAnimationLoop();
