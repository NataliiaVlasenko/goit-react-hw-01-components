import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: "40 px",
      }}
    >
      {/* React homework template sgagsehea */}
     
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}


        <FriendList friends={friends}/>
    </div>
  );
  
};
