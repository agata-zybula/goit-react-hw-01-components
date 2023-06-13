import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
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
    <li className={css.item}>
      {isOnline ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
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
