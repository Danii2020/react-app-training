import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { App } from './App';

const rootElement: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(rootElement);
root.render(<App />);
