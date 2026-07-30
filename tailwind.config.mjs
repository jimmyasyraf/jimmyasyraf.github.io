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
            a: {
              textDecorationColor: theme('colors.neutral[400]'),
              textUnderlineOffset: '3px',
            },
            img: {
              borderRadius: '0px',
              border: `1px solid ${theme('colors.neutral[200]')}`,
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
