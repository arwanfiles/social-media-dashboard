import { useRef, useEffect } from 'react';

export const useClickOutside = handleOutsideClick => {
    const innerBorderRef = useRef();

    const onClick = event => {
        if (
            innerBorderRef.current &&
            !innerBorderRef.current.contains(event.target)
        ) {
            handleOutsideClick();
        }
    };

    useMountEffect(() => {
        document.addEventListener('click', onClick, true);
        return () => {
            document.removeEventListener('click', onClick, true);
        };
    });

    return { innerBorderRef };
};

const useMountEffect = fun => useEffect(fun, []);
