import type { PageStoreType } from "@/models/typings";
import { images } from "@assets/images";

export const pages: PageStoreType = {
  metaData: {
    layout: {
      sx: { container: {}, views: {} },
      navigator: {
        actions: [
          {
            url: "/",
            label: "Home",
          },
          {
            label: "Me",
            url: "/me",
          },
          {
            label: "Poetry",
            url: "/poetry",
          },
          {
            label: "Books",
            url: "/books",
          },
           {
            label: "Education",
            url: "/education",
          },
        ],
      },
      navBar: {
        favicon: {
          image: {
            alt: "logo",
            src: "/logo.png"
          },
          url: "/"
        },
        links: [
          {
            url: "/",
            name: "Home",
          },
          {
            name: "Me",
            url: "/me",
          },
          {
            name: "Poety",
            url: "/poetry",
          },
      
           {
            name: "Library",
            url: "/library",
          },
          {
            name: "Store",
            url: "/store",
          },
        ],
      },
      footer: {
        links: [
          {
            url: "/",
            name: "Home",
          },
          {
            name: "About",
            url: "/about",
          },
          {
            name: "Services",
            url: "/services",
          },
          {
            name: "Contact",
            url: "/contact",
          },
        ],
      },
    },
  },
  data: {
    home: {
      metaData: {
        title: "Jama Riley | Writer",
        themeColor: "#FF69B4",
        icons: {
          icon: '/icons/apple-touch-icon.png',
          apple: '/icons/apple-touch-icon.png',

        },
        description: "A witty wordsmith weaving whimsical webs of wonder",
      },
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 2,
          },

          grids: [
            {
              columns: 2,
              gap: 1,
              span: 2,
              order: 1,

              items: [
                {
                  type: "image",
                  span: 1,
                  src: "/a.JPG"
                },

                {
                  type: "image",
                  span: 1,

                  src: "/b.PNG",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/q.jpg",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/h.jpg",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/j.jpg",
                },
                {
                  type: "image",
                  span: 1,

                  src: "/paint.jpg",
                },

              ],
            },
         
          ],
        },
      },
    },
    poetry: {
      layout: {
        metaData: {
          pageTitle: "About Me",
        },
      },
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 3,
          },
         
        },
      },
    },
    store: {
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 3,
          },
        
        },
      },
    },
    library: {
      metaData: {
        pageTitle: "Services",
      },
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 3,
          },
         
        },
      },
    },
    me: {
      metaData: {
        pageTitle: "Services",
      },
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 3,
          },

          grids: {

            items: [
              {
                type: "image",
                span: 1,

                src: "/paint.jpg",
              },
            ]
          }
        
        },
      },
    },
  },
};
