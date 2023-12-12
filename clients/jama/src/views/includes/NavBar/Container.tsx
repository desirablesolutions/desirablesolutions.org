export default function Container({ children, sx }: any) {
    return (
        <header className="sticky top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-30 backdrop-blur-sm">
       {children}
      </header> 
    )
}