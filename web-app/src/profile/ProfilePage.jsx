import React from 'react';

import { css } from '@emotion/css';

import { Path } from 'router/routing';

import DktButton from 'shared/DktButton';
import DktText from 'shared/DktText';

const containerStyle = css`
  width: fit-content;
  max-width: 1000px;
  margin: auto;
`;
const titleStyle = css`
  margin: 18px 0 4px;
  color: #235BFF;
`;
const editStyle = css`
  margin-top: 16px;
  display: block;
  width: fit-content;
`;

function ProfileField({ title, value }) {
  return (
    <div>
      <DktText holder="p" style={titleStyle}>{title}</DktText>
      <DktText holder="h4">{value}</DktText>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className={containerStyle}>
      <DktText holder="h2">Your information</DktText>
      <ProfileField title="Full name" value="Daniel Bastos" />
      <ProfileField title="Display name" value="Daniel Bastos" />
      <ProfileField title="Email" value="dan@gmail.com" />
      <ProfileField title="LinkedIn" value="https://linkedin.com/in/dan-bastos" />
      <ProfileField title="Github" value="https://github.com/danbsts" />
      <ProfileField title="Skills" value="CSS, HTML, JavaScript, Java" />
      <DktButton negative href={Path.PROFILE_EDIT} style={editStyle}>Edit</DktButton>
    </div>
  );
}