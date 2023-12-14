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
                  src: "/q.jpg"
                },

            
                {
                  type: "image",
                  span: 1,

                  src: "/her.jpg",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/q.jpg",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/r.jpg",
                },
                
                {
                  type: "image",
                  span: 1,

                  src: "/e.jpg",
                },
                {
                  type: "image",
                  span: 1,

                  src: "/gg.jpg",
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
          items: [
            {
              type: "header",
              content: "Individual Therapy Services",
              span: 3,
            },
          ],

          grids: [
            {
              span: 3,
              columns: 3,
              items: [
                {
                  type: "callout",
                  span: 2,
                  title: "My approach",
                  content: `
                  ​I specialize in treating adults with PTSD, OCD, anxiety, and depression.
                   While every client is different, individual therapy with me often follows a 
                   similar pattern. First, we’ll do a free phone consultation to make sure I’m a good
                    fit for you. Then we’ll do a few sessions together, so I can better understand your concerns, 
                    history, and goals. After that, we’ll develop a flexible treatment plan using research-supported 
                    treatments. This document will help you understand what to expect from our time together, so you 
                    can see the steps we'll take to help you reach your goals.`,
                },
                {
                  type: "callout",
                  span: 1,
                  title: "Fees",
                  subTitle: "$150/Session​",
                  content: `
                  
        
                  Each session is 50 minutes. We schedule a recurring appointment time to ensure 
                  that you receive the consistent care you need, at an interval that makes sense for you.

                  I do not accept insurance.`,
                },
              ],
            },
            {
              columns: 1,
              gap: 1,
              span: 3,
              items: [
                {
                  type: "image",
                  src: images.nature,
                },
              ],
            },
          ],
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
        
        },
      },
    },
  },
};
