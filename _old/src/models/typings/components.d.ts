export type HeroProps = {
    title?: any;
    cta?: {
      primary?: CallToActionProps,
      secondary?: CallToActionProps
    }
  }

  export type TextScramblerSpanProps = {
    static?: string;
    dynamic?: {
      obfuscator?: string;
      texts?: string[]
    }
  }
  
  export type TextScramblerProps = {
    spans: {
      primary?: TextScramblerSpanProps;
      secondary?: TextScramblerSpanProps
      tertiary?: TextScramblerSpanProps
    }
  }
  