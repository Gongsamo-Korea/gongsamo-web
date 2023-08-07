import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/components/ui/animations/lottie/loading.json';

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface LoadingComponentProps {
  width?: number;
  height?: number;
}

const LoadingComponent = ({ width = 80, height = 80 }) => {
  return <Lottie options={animationOptions} width={width} height={height} />;
};

export default LoadingComponent;
