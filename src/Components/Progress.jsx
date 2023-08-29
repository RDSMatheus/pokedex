import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Progress = (props) => {
  return (
    <ProgressBar
      margin="1rem"
      baseBgColor="#eee"
      width="80%"
      bgColor="#FF9B00"
      maxCompleted={160}
      completed={props.completed}
      customLabel={`${props.completed}`}
    />
  );
};

export default Progress;
