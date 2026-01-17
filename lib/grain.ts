// Grain texture generator for film-like aesthetic
// Generates a small canvas-based noise texture as a data URI for performance

export const createGrainDataUri = (): string => {
    // Only run on client-side
    if (typeof window === 'undefined') {
        return '';
    }

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    if (!ctx) return '';

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const gray = Math.random() * 255;
        imageData.data[i] = gray;     // R
        imageData.data[i + 1] = gray; // G
        imageData.data[i + 2] = gray; // B
        imageData.data[i + 3] = 255;  // A
    }
    ctx.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
};

// Memoized grain data URI - generated once on first access
let cachedGrainUri: string | null = null;

export const getGrainDataUri = (): string => {
    if (cachedGrainUri === null) {
        cachedGrainUri = createGrainDataUri();
    }
    return cachedGrainUri;
};
