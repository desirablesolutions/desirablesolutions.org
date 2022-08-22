const vendor = {
    carousel: {
        responsive: {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 1
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        }
    },

    analog_clock: (width) => {
        return {
            width: `${width}px`,
            border: true,
            borderColor: "#000000",
            baseColor: "#000000",
            centerColor: "#FFFFFF",
            centerBorderColor: "#ffffff",
            handColors: {
                second: "#FFFFFF",
                minute: "#ffffff",
                hour: "#ffffff"
            }
        }
    }
}

export default vendor


