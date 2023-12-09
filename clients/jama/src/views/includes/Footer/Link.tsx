export default function FooterLink({ name, url }: any) {
    return (
        <li>
        <a href={url} className="mr-4 text-black hover:underline md:mr-6">
          {`${name}`}
        </a>
      </li>
    )
}