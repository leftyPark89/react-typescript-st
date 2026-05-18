export default function Button({
                                 message,
                                 children,
                                 handleClick
                               }: {
  message: string;
  children: React.ReactNode;
  handleClick: (message:string) => void;
}) {
  // const handleClick = () => alert(message)

  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
      {/*<button onClick={handleClick}>{children}</button>*/}
    </>
  );
};