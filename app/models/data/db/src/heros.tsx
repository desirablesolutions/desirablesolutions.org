import meta from "@configs/meta"
import HandshakeIcon from '@mui/icons-material/Handshake';
import makeQueryable from "@utils/makeQueryable"

const heros = ({ query }) => {

    const data =  [
        {
            id: 'what-we-do',
            data: {
                bgImage: {
                    src: '/assets/images/banner-primary.png'
                },
                cta: {
                    name: 'Need help?',
                    icon: <HandshakeIcon />,
                    href: '/help'
                },
                lines: {
                    firstLine: {
                        href: '/team',
                        before: 'We solve',
                        texts: [...meta.info.problems],
                        speed: 77,
                        pauseTime: 3333,
                    },
                    secondLine: {
                        href: '/projects',
                        texts: [...meta.info.sectors],
                        before: 'problems for',
                        speed: 90,
                        pauseTime: 14000,
                    },
    
                }
            }
        },
    
        {
            id: 'our-projects',
            data: {
                bgImage: {
                    src: ''
                }
            }
        }
    ]


  return makeQueryable({ data, query })
}


export default heros