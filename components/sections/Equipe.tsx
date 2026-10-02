import React from 'react';
import Image from 'next/image';
import { slides } from '@/data/EquipeData';

export default function Equipe() {
  return (
    <div className="componente-carrossel-wrapper max-w-[1500px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Equipe do PET</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {slides.map((slide, i) => (
          <div key={i} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-72"> 
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <Image className="w-full h-full object-cover" src={slide.imgSrc} alt={slide.altText} width={128} height={128} />
            </div>
            <p className="text-xl font-bold text-gray-800 text-center">{slide.description}</p>
            <p className="text-sm text-gray-600 text-center mb-2">{slide.course}</p>
            {slide.ingresso && (
              <p className="text-xs text-gray-500 mb-1">Ingresso: {slide.ingresso}</p>
            )}
            {slide.position && (
              <p className="text-xs font-semibold text-blue-600 mb-3">{slide.position}</p>
            )}
            <div className="flex gap-4 mt-auto pt-4">
              {slide.social1 && slide.social1 !== '#' && slide.social1Icon && (
                <a href={slide.social1} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {React.createElement(slide.social1Icon, { size: 24 })}
                </a>
              )}
              {slide.social2 && slide.social2 !== '#' && slide.social2Icon && (
                <a href={slide.social2} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  {React.createElement(slide.social2Icon, { size: 24 })}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
