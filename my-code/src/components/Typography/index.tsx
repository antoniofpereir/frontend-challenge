import React from 'react';

/* styles */
import styles from './Typography.module.css';

type VariantTypes = 
  | 'bold1'
  | 'medium1'
  | 'medium2'
  | 'regular1';

type ColorTypes =
  | 'default'
  | 'secondary'
  | 'active'
  | 'negative'
  | 'highlight'
  | 'disabled';

interface TypographyProps {
  children: React.ReactNode,
  variant?: VariantTypes,
  color?: ColorTypes,
  style?: string,
}

const Typography: React.FC<TypographyProps> = ({
  children, variant = 'regular1', color = 'default', style,
}: TypographyProps) => {
  return (
    <div className={`${styles[variant]} ${styles[color]} ${style}`}>
      {children}
    </div>
  );
}

export default Typography;
