import Image from 'next/image';
import Link from 'next/link';

type FormatDateProps = {
  name: string
  logo: string
  page: string
}
export default function Topic(props: FormatDateProps): JSX.Element {

  return (
    <Link
      href={`/topics/${props.page}`}
    >
      <div className="topic">
        <Image
          src={props.logo}
          alt=""
          width={64}
          height={64}
        />
        <div className="topic__text">
          <h4>{props.name}</h4>
        </div>
      </div>
    </Link>
  );
}