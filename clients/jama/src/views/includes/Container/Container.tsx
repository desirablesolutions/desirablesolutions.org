

export const Presets=  {
  "Application": ({ children, className, lang }: any) => (
    <html lang={lang}>
    <body className={`${className}`}>{children}</body>
  </html>
  ) as React.ReactElement,
}

export default async function Container({ children, className, type  }: { type: "Application", className: string, children: any}) {
 
  const ContainerSelecion = Presets.Application

  return (
    <ContainerSelecion className={className}>
      {children}
    </ContainerSelecion>
  );
}
