import React from 'react'

interface TanjunExampleThemeContextValue {
  primaryColor: string
  secondaryColor: string
  textColor: string
}

const defaultThemeValue = {
  primaryColor: '#0FA956',
  secondaryColor: '#f50057',
  textColor: '#2b2b2b',
}
const TanjunExampleThemeContext =
  React.createContext<TanjunExampleThemeContextValue>(defaultThemeValue)

export const TanjunExampleThemeProvider = ({
  theme,
  children,
}: {
  theme?: Partial<TanjunExampleThemeContextValue>
  children?: React.ReactElement
}) => {
  return (
    <TanjunExampleThemeContext.Provider
      value={{ ...defaultThemeValue, ...theme }}>
      {children}
    </TanjunExampleThemeContext.Provider>
  )
}

export const useTanjunExampleTheme = () =>
  React.useContext(TanjunExampleThemeContext)
