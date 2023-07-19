export interface JSXModule extends JSX.Element {}



export interface GenericComponent<PropertyTypes> {
    props?: PropertyTypes
}

export interface IAstroComponent<PropertyTypes> extends Element, GenericComponent  {
    props?: PropertyTypes
}
export interface IJSXComponent<PropertyTypes> extends JSXModule {
    props?: PropertyTypes
}