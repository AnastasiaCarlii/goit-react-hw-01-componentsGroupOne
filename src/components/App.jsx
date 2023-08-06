import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendsList/FriendsList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
// import friends from './FriendsList/friends.json';
// import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
};
