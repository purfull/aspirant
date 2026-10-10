import './Button.scss';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
      {variant === 'primary' && <ArrowUpRight className="btn-icon" size={18} />}
    </button>
  );
};

export default Button;
