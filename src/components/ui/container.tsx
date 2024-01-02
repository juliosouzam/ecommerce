type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = (props: Props) => {
  return <div className="mx-auto w-full max-w-7xl">{props.children}</div>;
};
