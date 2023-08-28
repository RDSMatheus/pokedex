import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Progress = (props) => {
  return (
    <ProgressBar
      maxCompleted={160}
      completed={props.completed}
      customLabel={`${props.customLabel}: ${props.completed}`}
    />
  );
};

export default Progress;
