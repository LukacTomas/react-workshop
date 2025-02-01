import { memo } from 'react';

export const Footer = memo(function Footer() {
  console.log('Footer rendered');
  return (<h6 className="footer">Ema Stefanikova, Christian Scipa, Tomas Lukac</h6>);
});