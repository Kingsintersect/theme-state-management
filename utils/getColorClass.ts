// utils/getColorClass.ts

export const getColorClass = (color: string, type: string = 'bg'): string => {
    const colors: { [key: string]: { [key: string]: string } } = {
        neutral: {
            bg: 'bg-neutral',
            text: 'text-neutral-accent',
            accent: 'bg-neutral-accent',
        },
        success: {
            bg: 'bg-success',
            text: 'text-success-accent',
            accent: 'bg-success-accent',
        },
        warning: {
            bg: 'bg-warning',
            text: 'text-warning-accent',
            accent: 'bg-warning-accent',
        },
        important: {
            bg: 'bg-important',
            text: 'text-important-accent',
            accent: 'bg-important-accent',
        },
        info: {
            bg: 'bg-info',
            text: 'text-info-accent',
            accent: 'bg-info-accent',
        },
        danger: {
            bg: 'bg-danger',
            text: 'text-danger-accent',
            accent: 'bg-danger-accent',
        },
    };

    return colors[color] ? colors[color][type] : '';
};
