import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline = true }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

// const FriendList = ({ friends, FriendListItem }) => {
//   <div>
//     <ul classNameName="friend-list">
//       {friends.map(friend => ({ FriendListItem }))}
//     </ul>
//   </div>;
// };

// export const FriendList = ({ friends, avatar, name, isOnline }) => {
//   return (
//     <ul classNameName="friend-list">
//       {friends.map(friend => (
//         <li key={friend.id}>
//           <span classNameName="status">{friend.isOnline}</span>
//           <img
//             classNameName="avatar"
//             src={friend.avatar}
//             alt="User avatar"
//             width="48"
//           />
//           <p classNameName="name">{friend.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   <li classNameName="item">
//     <span classNameName="status">{isOnline}</span>
//     <img classNameName="avatar" src={avatar} alt="User avatar" width="48" />
//     <p classNameName="name">{name}</p>
//   </li>;
// };

// export const RenderFriendList = () => {
//   <div>
//     <FriendList>
//       <FriendListItem />
//     </FriendList>
//   </div>;
// };
