/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: false,
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				cat: {
					'run-serve': { DEFAULT: 'hsl(var(--cat-run-serve))', tint: 'hsl(var(--cat-run-serve-tint))', edge: 'hsl(var(--cat-run-serve-edge))' },
					'chat-assistants': { DEFAULT: 'hsl(var(--cat-chat-assistants))', tint: 'hsl(var(--cat-chat-assistants-tint))', edge: 'hsl(var(--cat-chat-assistants-edge))' },
					'code-development': { DEFAULT: 'hsl(var(--cat-code-development))', tint: 'hsl(var(--cat-code-development-tint))', edge: 'hsl(var(--cat-code-development-edge))' },
					'knowledge-retrieval': { DEFAULT: 'hsl(var(--cat-knowledge-retrieval))', tint: 'hsl(var(--cat-knowledge-retrieval-tint))', edge: 'hsl(var(--cat-knowledge-retrieval-edge))' },
					'voice-audio': { DEFAULT: 'hsl(var(--cat-voice-audio))', tint: 'hsl(var(--cat-voice-audio-tint))', edge: 'hsl(var(--cat-voice-audio-edge))' },
					'images-video': { DEFAULT: 'hsl(var(--cat-images-video))', tint: 'hsl(var(--cat-images-video-tint))', edge: 'hsl(var(--cat-images-video-edge))' },
					'train-operate': { DEFAULT: 'hsl(var(--cat-train-operate))', tint: 'hsl(var(--cat-train-operate-tint))', edge: 'hsl(var(--cat-train-operate-edge))' },
				},
				// Hub template palette — tokens live in src/app/globals.css (--hub-*).
				hub: {
					violet: { DEFAULT: 'var(--hub-violet)', tint: 'var(--hub-violet-tint)', ink: 'var(--hub-violet-ink)', edge: 'var(--hub-violet-edge)' },
					azure: { DEFAULT: 'var(--hub-azure)', tint: 'var(--hub-azure-tint)', ink: 'var(--hub-azure-ink)', edge: 'var(--hub-azure-edge)' },
					indigo: { DEFAULT: 'var(--hub-indigo)', tint: 'var(--hub-indigo-tint)', ink: 'var(--hub-indigo-ink)', edge: 'var(--hub-indigo-edge)' },
					orchid: { DEFAULT: 'var(--hub-orchid)', tint: 'var(--hub-orchid-tint)', ink: 'var(--hub-orchid-ink)', edge: 'var(--hub-orchid-edge)' },
					rose: { DEFAULT: 'var(--hub-rose)', tint: 'var(--hub-rose-tint)', ink: 'var(--hub-rose-ink)', edge: 'var(--hub-rose-edge)' },
					orange: { DEFAULT: 'var(--hub-orange)', tint: 'var(--hub-orange-tint)', ink: 'var(--hub-orange-ink)', edge: 'var(--hub-orange-edge)' },
					blue: { DEFAULT: 'var(--hub-blue)', tint: 'var(--hub-blue-tint)', ink: 'var(--hub-blue-ink)', edge: 'var(--hub-blue-edge)' },
					olive: { DEFAULT: 'var(--hub-olive)', tint: 'var(--hub-olive-tint)', ink: 'var(--hub-olive-ink)', edge: 'var(--hub-olive-edge)' },
					amber: { DEFAULT: 'var(--hub-amber)', tint: 'var(--hub-amber-tint)', ink: 'var(--hub-amber-ink)', edge: 'var(--hub-amber-edge)' },
					cyan: { DEFAULT: 'var(--hub-cyan)', tint: 'var(--hub-cyan-tint)', ink: 'var(--hub-cyan-ink)', edge: 'var(--hub-cyan-edge)' },
					new: { tint: 'var(--hub-new-tint)', ink: 'var(--hub-new-ink)', edge: 'var(--hub-new-edge)' },
				},
				hero: {
					from: 'hsl(var(--hero-from))',
					to: 'hsl(var(--hero-to))',
					edge: 'hsl(var(--hero-edge))',
				},
				tone: {
					action: 'hsl(var(--tone-action))',
					'action-edge': 'hsl(var(--tone-action-edge))',
					list: 'hsl(var(--tone-list))',
					'list-edge': 'hsl(var(--tone-list-edge))',
					stat: 'hsl(var(--tone-stat))',
					'stat-edge': 'hsl(var(--tone-stat-edge))',
				},
				foreground: 'hsl(var(--foreground))',
				// Primary - Deep Violet
				primary: {
					DEFAULT: '#6750A4',
					foreground: '#FFFFFF',
					light: '#E8DEF8',
				},
				// Secondary
				secondary: {
					DEFAULT: '#E8DEF8',
					foreground: '#6750A4',
				},
				// Tertiary - Rose
				tertiary: {
					DEFAULT: '#7D5260',
					foreground: '#FFFFFF',
				},
				// Surfaces - Light theme
				surface: {
					DEFAULT: '#F7F2FA',
					elevated: '#FFFFFF',
					highlight: '#FEF7FF',
				},
				// Text colors
				'text-primary': '#1C1B1F',
				'text-secondary': '#49454F',
				'text-muted': '#79747E',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: '#F5F5F5',
					foreground: '#49454F',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1C1B1F',
				},
			},
			fontFamily: {
				sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-jetbrains-mono)', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				// One-time CTA entrance pop (hub template primary CTA) — never infinite/looping.
				'hub-cta-pop': {
					'0%': { transform: 'scale(0.92)' },
					'60%': { transform: 'scale(1.045)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'hub-cta-pop': 'hub-cta-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
