import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.image} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.text}>Followers</span>
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.text}>Views</span>
          <span className={css.text}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.text}>Likes</span>
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
