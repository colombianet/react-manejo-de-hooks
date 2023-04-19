import React from 'react';
import ReactDOM from 'react-dom/client';
import { HookApp } from './HookApp';
import { CounterApp } from './useState/CounterApp';
import { CounterWithCustoHook } from './useState/CounterWithCustoHook';
import { SimpleForm } from './useEffect/SimpleForm';
import { SimpleFormWithCustomHook } from './useEffect/SimpleFormWithCustomHook';
import { MultipleCustomHook } from './examples/MultipleCustomHook';
import { FocusScreen } from './useRef/FocusScreen';
import { Counter } from './useMemo/Counter';
import { UseMemoCounter } from './useMemo/UseMemoCounter';
import { CallbackHook } from './useMemo/CallbackHook';
import { Padre } from './tarea-memo/Padre';
import { TodoApp } from './useReducer/TodoApp';
import { MainApp } from './useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
  </BrowserRouter>
)
