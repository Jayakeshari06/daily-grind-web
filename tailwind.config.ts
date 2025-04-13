
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                coffee: {
                    100: '#F5EBE0',
                    200: '#E6D2BA',
                    300: '#D2B48C',
                    400: '#A67C52',
                    500: '#7D5A3C',
                    600: '#5C4033',
                    700: '#3B2A20',
                    800: '#1E1510',
                    900: '#0D0905',
                },
                cream: {
                    100: '#FFFBF2',
                    200: '#FFF6E5',
                    300: '#FFF1D6',
                    400: '#F8E4C8',
                    500: '#F0D6B7',
                },
                // Indian theme colors
                spice: {
                    100: '#FFF3E0', // Light turmeric
                    200: '#FFE0B2', // Light saffron
                    300: '#FFCC80', // Medium saffron
                    400: '#FFB74D', // Saffron
                    500: '#FFA726', // Deep saffron (main)
                    600: '#FB8C00', // Darker saffron
                    700: '#F57C00', // Burnt saffron
                    800: '#EF6C00', // Very dark saffron
                    900: '#E65100', // Almost red saffron
                },
                chai: {
                    100: '#EFEBE9', // Light chai
                    200: '#D7CCC8', // Pale chai
                    300: '#BCAAA4', // Medium chai
                    400: '#A1887F', // Chai
                    500: '#8D6E63', // Rich chai (main)
                    600: '#795548', // Dark chai
                    700: '#6D4C41', // Very dark chai
                    800: '#5D4037', // Extra dark chai
                    900: '#4E342E', // Almost black chai
                },
                henna: {
                    100: '#FFCCBC', // Light henna
                    200: '#FFAB91', // Medium henna
                    300: '#FF8A65', // Henna
                    400: '#FF7043', // Deep henna
                    500: '#FF5722', // Bright henna (main)
                    600: '#F4511E', // Dark henna
                    700: '#E64A19', // Very dark henna
                    800: '#D84315', // Extra dark henna
                    900: '#BF360C', // Almost brown henna
                },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'lato': ['Lato', 'sans-serif'],
            },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'pulse-slow': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.8'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
