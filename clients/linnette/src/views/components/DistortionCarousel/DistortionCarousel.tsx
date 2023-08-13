import React from 'react';
import { useDistortionEffectCarousel } from 'distortion-effect-carousel';

interface MyCarouselProps {
  images: string[];
  displacmentImage: string;
}

export default function DistortionCarousel({ images, displacmentImage }: MyCarouselProps) {

    const { ref, next, prev } = useDistortionEffectCarousel({
        images,
        displacmentImage,
      });
    
      // ... do something with next() and prev()
      return (
        <div
          style={{
            height: '100%',
          }}
          ref={ref}
        />
      );
}