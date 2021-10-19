import { useEffect, useState } from 'react';

export default function useAnimation(
  targetValue: number,
  durationInMilli: number,
  stepSize: number
) {
  const [progress, setProgress] = useState(0.0);
  const animationUpdateIntervalInMilli =
    durationInMilli / (targetValue / stepSize);

  useEffect(() => {
    if (progress < targetValue) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= targetValue ? targetValue : prevProgress + stepSize
        );
      }, animationUpdateIntervalInMilli);

      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  return progress;
}
