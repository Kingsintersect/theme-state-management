import type { Config } from 'tailwindcss';

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./data/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				black: {
					DEFAULT: "hsl(--black)",
					100: "#000319",
					200: "rgba(17, 25, 40, 0.75)",
					300: "rgba(255, 255, 255, 0.125)",
				},
				white: {
					DEFAULT: "hsl(var(--white))",
					100: "#BEC1DD",
					200: "#C1C2D3",
				},
				primary: {
					DEFAULT: "hsl(var(--primary-light-mode))",
					light: "hsl(var(--primary-light))",
					dark: "hsl(var(--primary-dark-mode))",
					50: "hsl(var(--primary-50))",
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					500: "hsl(var(--primary-500))",
					800: "hsl(var(--primary-800))",
					950: "hsl(var(--primary-950))",
				},
				neutral: {
					DEFAULT: "hsl(var(--gray))",
					accent: "hsl(var(--gray-accent))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					accent: "hsl(var(--success-accent))",
				},
				warning: {
					DEFAULT: "hsl(var(--warning))",
					accent: "hsl(var(--warning-accent))",
				},
				important: {
					DEFAULT: "hsl(var(--important))",
					accent: "hsl(var(--important-accent))",
				},
				info: {
					DEFAULT: "hsl(var(--info))",
					accent: "hsl(var(--info-accent))",
				},
				danger: {
					DEFAULT: "hsl(var(--danger))",
					accent: "hsl(var(--danger-accent))",
				},
				border: {
					DEFAULT: "hsl(var(--primary-200))",
					accent: "hsl(var(--primary-800))"
				}
			},
		},
	},
} satisfies Config;

export default config;
