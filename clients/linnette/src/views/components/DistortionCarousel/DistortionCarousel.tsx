"use client";


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
    
      return (
        <div
        onClick={() => next()}
        className='object-fit pointer-select'
          style={{
            height: '100vh',
            cursor: 'pointer',
          }}
          ref={ref}
        />
      );
}