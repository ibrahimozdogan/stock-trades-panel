import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      secondary: string
      danger: string
      white: string
      gray: string
      lightGray: string
    }
    fontSizes: {
      title: Record<string, string>
      text: Record<string, string>
    }
  }
}

export interface StockPayload {
  id: string
  type: string
  symbol: string
  shares: number
  price: number
  timestamp: string
  user: {
    id: number
    name: string
  }
}

export type StockResponse = StockPayload[]
