'use client'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import React, { useState } from 'react'

export function PhoneValidator() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  const [fokusContainer, setFokusContainer] = useState<boolean>(false)

  // fungsi pengaturan phone number
  function handlechangephone(e): void {
    setValue(e)
  }

  // fungsi pengaturan focus
  function handleFocus():void{
    setFokusContainer(true)
  }

  // fungsi pengaturan blur
  function handleBlur():void{
    setFokusContainer(false)
  }

  const divStyle = {
    backgroundColor: '#1D232A',
    border: "3px solid #3ABFF8",
    borderRadius: "10px",
  };
  const inputStyle = {
    backgroundColor: '#1D232A', 
    height: '48px',
    border: "1px solid #1D232A",
    outlineColor: "red",
    borderRadius: '7px'
  };

  const container = {
    border: "1px solid #3ABFF8",
    borderRadius: "10px",
    outline: `2px solid ${fokusContainer? "#3ABFF8" : "transparent"}`,
    outlineOffset: '2px',
    overflow: 'hidden'
  }

  return (
    <PhoneInput
      country={'id'}
      value={value}
      onChange={handlechangephone}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      inputStyle={inputStyle}
      buttonStyle={inputStyle}
      dropdownStyle={divStyle}
      // searchStyle={divStyle}
      containerStyle={container}
    />
  )
}