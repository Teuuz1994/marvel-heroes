import React, { useEffect, useRef, useCallback } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyles?: any;
  maxWidth?: number | string;
}

interface InputValueReference extends TextInput {
  value: string;
}

const Input = ({
  name,
  onChangeText,
  containerStyles = {},
  maxWidth,
  ...rest
}: InputProps) => {
  const inputRef = useRef<InputValueReference>(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText],
  );

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyles} isErrored={!!error} maxWidth={maxWidth}>
      <TextInput
        ref={inputRef}
        placeholderTextColor="#ADACAC"
        defaultValue={defaultValue}
        onChangeText={handleChangeText}
        {...rest}
      />
    </Container>
  );
};

export default Input;
