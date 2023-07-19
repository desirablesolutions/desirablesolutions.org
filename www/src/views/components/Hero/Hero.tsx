export const defaultProps = {
  title: (
    <>
      <span className="block leading-none">We solve</span>
      <span className="block leading-none">
        {"{"}x{"}"} problems
      </span>
      <span className="relative inline-block">
        <span className="relative z-10 block leading-none">
          for {"{"}y{"}"}.
        </span>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-px mb-1 xl:mb-3 3xl:mb-4 bg-white" />
      </span>
    </>
  ),
  cta: {
    primary: {},
    secondary: {},
  },
};

export default function Hero(props: any) {
  const Title = () => {
    return (
      <h1 className="text-8xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">
        {props?.title ?? defaultProps.title}
      </h1>
    );
  };
  return (
    <section className="relative pb-24 md:pb-52 overflow-hidden font-serif">
      <div className="h-16">
        <div className="absolute top-0 left-1/2">
          <div className="w-px h-16 bg-gray-900" />
          <div className="w-px h-24 bg-white" />
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="pt-40 sm:pt-64">
          <Title />
          <div>
            {props?.cta?.secondary ? (
              <a className="inline-flex mb-20 items-center text-white" href="#">
                <span className="mr-4">{props?.cta?.secondary?.name}</span>
                <div />
              </a>
            ) : (
              <a className="inline-flex mb-20 items-center text-white" href="#">
                <span className="mr-4">
                  {defaultProps?.cta?.secondary?.name}
                </span>
                <div />
              </a>
            )}
          </div>
          {props?.cta ? (
            <a
              className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
              href={props?.cta.primary?.url}
            >
              {props?.cta?.primary.name}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
