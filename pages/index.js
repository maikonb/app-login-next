import { withAuthenticator } from "@aws-amplify/ui-react";

function Home({signOut,user}){
    return (
        <>
          <h1>hello {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>
        </>
      )
}
export default withAuthenticator(Home)