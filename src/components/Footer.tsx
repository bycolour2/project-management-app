import React, { useState } from 'react';
import rslogo from './../assets/svg/rs_school_js.svg';
import { VscGithubAlt } from 'react-icons/vsc';
import { SlSocialGithub } from 'react-icons/sl';

export default function Footer() {
  const [lang, setLang] = useState('en');

  return (
    <footer className="flex min-h-[80px] flex-col items-center justify-around gap-[40px] bg-slate-400 p-[20px] text-2xl text-amber-400 sm:flex-row sm:gap-[0px]">
      <div className="transition duration-300 hover:scale-105">
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <img className="w-[100px]" src={rslogo} alt="rs logo" />
        </a>
      </div>
      <ul className=" flex flex-col gap-[10px] text-center sm:flex-row sm:gap-[30px]">
        <li className="flex items-center gap-[5px] transition duration-300 hover:text-amber-500">
          <SlSocialGithub />
          <a href="https://github.com/NikitaKakurin" target="_blank" rel="noreferrer">
            {lang == 'en' ? 'Nikita' : 'Никита'}
          </a>
        </li>
        <li className="flex items-center gap-[5px] transition duration-300 hover:text-amber-500">
          <VscGithubAlt />
          <a href="https://github.com/bycolour2" target="_blank" rel="noreferrer">
            {lang == 'en' ? 'Rustam' : 'Рустам'}
          </a>
        </li>
        <li className="flex items-center gap-[5px] transition duration-300 hover:text-amber-500">
          <VscGithubAlt />
          <a href="https://github.com/lg0leg" target="_blank" rel="noreferrer">
            {lang == 'en' ? 'Oleg' : 'Олег'}
          </a>
        </li>
      </ul>
      <p className="w-[100px] text-center">©2022</p>
    </footer>
  );
}
