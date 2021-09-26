import React from 'react';

import Skill from './Skill';

export default function HighlightedSkills() {
  return (
    <>
      <Skill label='NodeJs' value={80} />
      <Skill label='AWS' value={60} />
      <Skill label='React' value={100} />
      <Skill label='Java' value={100} />
      <Skill label='Python' value={80} />
    </>
  );
}
