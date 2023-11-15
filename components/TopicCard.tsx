import Image from 'next/image';

type FormatDateProps = {
  name: string
  logo: string
  page: string
  onClick: () => void;
}
export default function TopicCard(props: FormatDateProps): JSX.Element {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className="topic" onClick={handleClick}>
        <div>
          <Image src={props.logo} alt="" width={64} height={64} />
          <div className="topic__text">
            <h4>{props.name}</h4>
          </div>
        </div>
    </div>
  );
}
