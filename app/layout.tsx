'use client'; 
import { ReactNode } from 'react'
import styled from 'styled-components';


const H1 = styled.h1`
  text-align: center;
  color: #4CAF50;
  font-size: 50px;
  font-family: 'Arial', sans-serif;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <H1> Simple OAuth App </H1>
        <main>{children}</main>
      </body>
    </html>
  );
}