export const getQuadrantPosition = (quadrant: number, scaleFactor: number) => {
    switch (quadrant) {
        case 0:
            return { transform: [{ translateX: -20 * scaleFactor }, { translateY: -20 * scaleFactor }] };
        case 1:
            return { transform: [{ translateX: -430 * scaleFactor }, { translateY: -20 * scaleFactor }] };
        case 2:
            return { transform: [{ translateX: -20 * scaleFactor }, { translateY: -660 * scaleFactor }] };
        case 3:
            return { transform: [{ translateX: -430 * scaleFactor }, { translateY: -660 * scaleFactor }] };
        default:
            return { transform: [{ translateX: 0 }, { translateY: 0 }] };
    }
};
