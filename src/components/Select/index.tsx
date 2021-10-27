import {
  SelectHTMLAttributes, useEffect, useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './styles';
import { Module } from '../../interfaces/Module';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  modules: Module[]
}

export const Select = ({
  name, icon: Icon, modules,
}: InputProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const {
    fieldName, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <select ref={selectRef}>
        {modules.map((module) => <option>{module.name}</option>)}
      </select>
    </Container>
  );
};
