import React, { useState } from 'react';

interface AnimationFrameProps {
  src: string;
  title: string;
  description?: string;
}

export default function AnimationFrame({ src, title, description }: AnimationFrameProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="animation-frame-container">
      <div className="animation-frame-header">
        <div>
          <h3 className="animation-frame-title">{title}</h3>
          {description && <p className="animation-frame-description">{description}</p>}
        </div>
        <a 
          href={src} 
          target="_blank" 
          rel="noopener noreferrer"
          className="animation-frame-link"
          title="Open in new window"
        >
          ↗
        </a>
      </div>
      
      <div className="animation-frame-wrapper">
        {isLoading && <div className="animation-frame-loader">Loading animation...</div>}
        <iframe
          src={src}
          title={title}
          className="animation-frame-iframe"
          onLoad={() => setIsLoading(false)}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
