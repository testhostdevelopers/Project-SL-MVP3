import React from "react";
// import ActivityCard from '../../assets/img/custom/activity-cardonly.png';

const Buytab = () => {
  const buy_tab = [
    {
      tab_name: "Details",
      tab_link: "#pills-Details",
      tab_control: "pills-details",
      tab_id: "pills-home-tab",
      tab_role: "tab",
    },
    {
      tab_name: "Owner",
      tab_link: "#pills-home",
      tab_control: "pills-home",
      tab_id: "pills-home-tab",
      tab_role: "tab",
    },
    {
      tab_name: "Bids",
      tab_link: "#pills-profile",
      tab_control: "pills-profile",
      tab_id: "pills-profile-tab",
      tab_role: "tab",
    },
    {
      tab_name: "History",
      tab_link: "#pills-contact",
      tab_control: "pills-contact",
      tab_id: "pills-profile-tab",
      tab_role: "tab",
    },
  ];

  return (
    <>
      <ul
        className="nav nav-pills mb-3 artwork-tab-nav"
        id="pills-tab"
        role="tablist"
      >
        {buy_tab.map((buy_, b_k) => (
          <li key={b_k} className="nav-item">
            <a
              className="nav-link"
              id={buy_.tab_id}
              data-toggle="pill"
              href={buy_.tab_link}
              role={buy_.tab_role}
              aria-controls={buy_.tab_control}
              aria-selected="true"
            >
              {buy_.tab_name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buytab;
