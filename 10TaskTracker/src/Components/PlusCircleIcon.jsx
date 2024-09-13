import React from 'react';
import { PlusCircle } from 'lucide-react';

const PlusCircleIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return <PlusCircle size={size} color={color} {...props} />;
};

export default PlusCircleIcon;