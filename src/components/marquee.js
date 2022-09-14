import React from 'react';
import { useInView } from 'react-cool-inview';
import { Marqy } from 'marqy';



const Marquee = ({ data = {} }) => {
  const { items, speed, reverse, pausable } = data;

  if (!items?.length) return null;

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  });

  return (
    <div ref={observe} className="marquee-section">
      <Marqy
        speed={speed}
        direction={reverse ? 'right' : 'left'}
        pauseOnHover={pausable}
        className="marquee"
      >
        <div className="marquee--item">
          {items.map((item, key) => {
            switch (item._type) {
              case 'simple':
                return (
                  <span key={key} className="marquee--text">
                    {item.text}
                  </span>
                );


            }
          })}
        </div>
      </Marqy>
    </div>
  );
};

export default Marquee;
