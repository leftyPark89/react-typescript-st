import Button from "./components/ui/button.tsx";


export default function App() {
  const userProfile1 = {
    name: "park",
    age: 20,
    isAdmin: true
  }
  const userProfile2 = {
    name: "lee",
    age: 40,
    isAdmin: false
  }
const handleClick = (message:string) => alert(message);

  return (
    <>
      <Button message="Playing!!"
              handleClick={handleClick}>
        Playing
      </Button>
      <br/>
      <Button message="Login Complete!!"
              handleClick={handleClick}>
        Login Complete
      </Button>
      <br/>
      <Button message="Logout!!"
              handleClick={(message:string) => alert(message)}>Logout
      </Button>
      {/*<UserProfile name="park" age={20} isAdmin={true}/>*/}
      {/*<UserProfile name="lee" age={40} isAdmin={false}/>*/}
      {/*<UserProfile {...userProfile1} />*/}
    </>
  );
};