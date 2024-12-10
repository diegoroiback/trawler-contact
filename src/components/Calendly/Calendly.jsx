import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  const [iframeHeight, setIframeHeight] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIframeHeight(920);
      } else {
        setIframeHeight(700);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '0 20px 70px', marginTop: '-40px' }}>
      <style>
        {`
          .calendly-inline-widget {
            border-radius: 20px;
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .calendly-inline-widget {
              border-radius: 30px;
            }
          }

          @media (max-width: 480px) {
            .calendly-inline-widget {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            .calendly-inline-widget::-webkit-scrollbar {
              display: none;
            }
          }
        `}
      </style>
      <InlineWidget 
        url={`https://calendly.com/tech-trawler/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=4fc2e2`} 
        styles={{ minWidth: '320px', height: `${iframeHeight}px` }}
      />
    </div>
  );
};

export default Calendly;
