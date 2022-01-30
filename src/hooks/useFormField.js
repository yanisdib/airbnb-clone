import { useState } from 'react'


export default (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const updateValue = (event) => {
        const targetType = event.target.type;
        
        setValue(targetType === 'checkbox' ? event.target.checked : event.target.value);
    };

    return [value, updateValue];
}