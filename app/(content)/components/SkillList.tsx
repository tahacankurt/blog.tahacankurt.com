'use client';

import React, { useState } from 'react';
import styles from './skillList.module.css';

interface ITechnicalSkills {
  [key: string]: string[];
}

const technicalSkills: ITechnicalSkills = {
  js: ['next.js', 'mongoDb', 'react.js', 'gcp'],
  php: ['laravel', 'mysql'],
};

export default function SkillList() {
  const [subList, setSubList] = useState({ list: technicalSkills.js, key: 'js' });

  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-7 gap-28 mt-10 lg:mt-16 content-center">
        {Object.keys(technicalSkills).map((keyName) => (
          <div className="relative" key={keyName} style={{ cursor: 'pointer' }}>
            <button
              onClick={() => { setSubList({ list: technicalSkills[keyName], key: keyName }); }}
              className={`${styles.button} bg-neuorange text-white mr-4`}
              type="button"
            >
              {keyName}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 lg:mt-20 content-center">
        {subList.list.map((listKey) => (
          <div key={listKey}>
            <h3 className="text-3xl">{listKey}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
