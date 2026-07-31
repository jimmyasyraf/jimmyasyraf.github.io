/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral[600]'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.neutral[600]'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.neutral[500]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[200]'),
            '--tw-prose-quotes': theme('colors.neutral[700]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[500]'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.neutral[700]'),
            '--tw-prose-pre-bg': theme('colors.neutral[100]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]'),
            '--tw-prose-invert-body': theme('colors.neutral[400]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.neutral[400]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.neutral[500]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[800]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[500]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-invert-th-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[800]'),
            a: {
              textDecorationColor: 'var(--tw-prose-counters)',
              textUnderlineOffset: '3px',
            },
            img: {
              borderRadius: '0px',
              border: '1px solid var(--tw-prose-hr)',
            },
            p: {
              lineHeight: theme('lineHeight.7'),
            }
          }
        }
      })
  	}
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/typography')],
};
