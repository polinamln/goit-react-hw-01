import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? css.online : css.offline;

  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt={name} width="78" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default FriendListItem;
