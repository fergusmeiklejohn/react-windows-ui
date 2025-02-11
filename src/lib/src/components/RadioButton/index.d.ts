import React from 'react'

export interface RadioButtonProps {
  name ?: string;
  value ?: any;
  defaultChecked ?: boolean;
  disabled ?: boolean;
  label ?: string;
  tooltip ?: string;
  onChange ?: () => void;
}
declare const RadioButton: React.FC<RadioButtonProps>

export default RadioButton