import { renderHook } from '@testing-library/react-hooks/dom';
import { act } from 'react-dom/test-utils';

import useFormField from '../useFormField';


describe('useFormField hook', () => {
    it('returns a default value', () => {
        const { result } = renderHook(useFormField);

        expect(result.current[0]).toBe('') // current[0] is the current state value
    })

    it('has an onChange event handler', () => {
        const event = { target: { type: 'checkbox', checked: true } };

        const { result } = renderHook(useFormField);

        const updateValue = jest.fn(result.current[1]); // current[1] is an event handler

        act(() => updateValue(event)) 

        expect(updateValue).toHaveBeenCalled()
    })

    it('updates state if checkbox', () => {
        const event = { target: { type: 'checkbox', checked: true } };

        const { result } = renderHook(useFormField);

        act(() => result.current[1](event)) // current[1] is an event handler

        expect(result.current[0]).toEqual(true) // current[0] is the current state value
    })

    it('updates state if not checkbox', () => {
        const event = { target: { type: 'text', value: 'Yanis Dib' } };

        const { result } = renderHook(useFormField);

        act(() => result.current[1](event)) // current[1] is an event handler

        expect(result.current[0]).toBe('Yanis Dib') // current[0] is the current state value
    })
})