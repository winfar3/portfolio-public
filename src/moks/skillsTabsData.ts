import html from "../assets/images/svg/html-5.svg";
import css from "../assets/images/svg/css.svg";
import sass from "../assets/images/svg/sass.svg";
import js from "../assets/images/svg/js.svg";
import react from "../assets/images/svg/react.svg";
import git from "../assets/images/svg/git.svg";
import gulp from "../assets/images/svg/gulp-1.svg";
import figma from "../assets/images/svg/figma.svg";
import photoshop from "../assets/images/svg/photoshop-cc-6.svg";
import illustrator from "../assets/images/svg/illustrator.svg";
import redux from '../assets/images/svg/redux.svg';
import reactNative from '../assets/images/svg/react-native.svg';
import ts from '../assets/images/svg/ts.svg';
import jest from '../assets/images/svg/jest.svg';
import vscode from '../assets/images/svg/vs-code.svg';

const skillsTabsData = [
  {
    title: 'Frontend',
    list: [
      { icon: reactNative, text: 'React Native'},
      { icon: react, text: 'React' },
      { icon: redux, text: 'Redux Toolkit' },
      { icon: ts, text: 'TypeScript' },
      { icon: js, text: 'JavaScript' },
      { icon: jest, text: 'Jest' },
      { icon: sass, text: 'SCSS' },
      { icon: css, text: 'CSS3' },
      { icon: html, text: 'HTML5' },
    ],
  },
  {
    title: 'Dev Tools',
    list: [
      { icon: git, text: 'GIT' },
      { icon: gulp, text: 'GULP' },
      { icon: vscode, text: 'VSCode' },
    ],
  },
  {
    title: 'Design Tools',
    list: [
      { icon: figma, text: 'Figma' },
      { icon: photoshop, text: 'Photoshop' },
      { icon: illustrator, text: 'Illustrator' },
    ],
  },
];

export default skillsTabsData;
