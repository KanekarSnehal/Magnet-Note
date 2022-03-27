import "./sidenavigation.css";
export const SideNavigation = () => {
  return (
    <div className="sideNav-container ">
      <div className="sideNav-buttons">
        <button className="btn p-md outline-secondary-btn">
          <i class="fas fa-home mr-16 "></i>Home
        </button>
        <button className="btn p-md outline-secondary-btn">
          <i class="fas fa-tags mr-16 "></i>Labels
        </button>
        <button className="btn p-md outline-secondary-btn">
          <i class="fas fa-archive mr-16 "></i>Archive
        </button>
        <button className="btn p-md outline-secondary-btn">
          <i class="far fa-trash-alt mr-16 "></i>Trash
        </button>
        <button className="btn p-md outline-secondary-btn">
          <i class="far fa-user  mr-16"></i>Profile
        </button>
      </div>

      <button className="btn primary-btn my-16">Create New Note</button>
      <div className="btn outline-primary-btn user-logout p-md text-bold-weight secondary-text-color">
        <img
          loading="lazy"
          src="avatar.jpg"
          class="avatar avatar-xs-size"
          alt="avatar"
        />
        Snehal Kanekar<i class="fas fa-sign-out ml-16"></i>
      </div>
    </div>
  );
};
