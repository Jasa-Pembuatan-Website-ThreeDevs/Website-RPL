import { memo } from 'react';
import { useInView } from '../../hooks/useInView';

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView();

  const hidden =
    direction === 'left'
      ? '-translate-x-8 opacity-0'
      : direction === 'right'
        ? 'translate-x-8 opacity-0'
        : 'translate-y-8 opacity-0';

  const visible =
    direction === 'left' || direction === 'right'
      ? 'translate-x-0 opacity-100'
      : 'translate-y-0 opacity-100';

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll transition-[opacity,transform] duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-none motion-reduce:transition-none ${
        inView ? visible : hidden
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export default memo(Reveal);
