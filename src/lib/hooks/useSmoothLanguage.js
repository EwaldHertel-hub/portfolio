import { useState, useEffect } from 'react';

export const useSmoothLanguage = (content) => {
    const [displayedContent, setDisplayedContent] = useState(content);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if (content !== displayedContent) {
            setOpacity(0);
            setTimeout(() => {
                setDisplayedContent(content);
                setOpacity(1);
            }, 300); // Corresponds to the transition duration
        }
    }, [content, displayedContent]);

    return { displayedContent, style: { transition: 'opacity 300ms ease-in-out', opacity } };
};