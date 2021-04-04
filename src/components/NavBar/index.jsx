import React, { useContext, useState } from "react";
import ClayLink from "@clayui/link";
import ClayNavigationBar from "@clayui/navigation-bar";
import ClaySticker from "@clayui/sticker";
import ClayDropDown from "@clayui/drop-down";
import { useHistory, useLocation } from "react-router";
import ClayIcon from "@clayui/icon";
import AppContext from "../../AppContext";
import { tokenKey } from "../../utils/util";
import swal from '@sweetalert/with-react';

const routes = [
  {
    name: "Pokemons",
    path: "/",
    private: false,
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    private: true,
  },
  {
    name: "Purchased Pokemon",
    path: "/cart",
    private: true,
  },
];

const NavigationBar = () => {
  const [{ loggedUser, me }, dispatch] = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState(false);

  const handleLogout = () => {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          localStorage.removeItem(tokenKey);

          setActive(false);
    
          dispatch({ type: "SET_LOGGED_USER", payload: null });
    
          history.push("/auth");

          swal("Logged out with success!", {
            icon: "success",
          });
        } else {
          swal({text: "Log out canceled."});
        }
      });
  };

  return (
    <ClayNavigationBar triggerLabel="My Pokemon Commerce">
      <>
        {routes.map(({ name, path }) => (
          <ClayNavigationBar.Item
            key={path}
            className="dynamic-route"
            active={path === location.pathname}
          >
            <ClayLink
              onClick={() => history.push(path)}
              className="nav-link"
              displayType="unstyled"
            >
              {name}
            </ClayLink>
          </ClayNavigationBar.Item>
        ))}
      </>

      {loggedUser ? (
        <ClayNavigationBar.Item>
          <ClayLink className="nav-link" displayType="unstyled" >
            Pokedolars ${me.pokeDolar}
          </ClayLink>
          <ClayDropDown
            trigger={
              <div>
                <ClaySticker displayType="primary" size="lg">
                  <ClayIcon symbol="user" />
                </ClaySticker>
              </div>
            }
            active={active}
            onActiveChange={setActive}
          >
            <ClayDropDown.Help>{`Welcome Trainer ${loggedUser.name}`}</ClayDropDown.Help>
            <ClayDropDown.ItemList>
              <ClayDropDown.Item onClick={handleLogout}>
                Logout
              </ClayDropDown.Item>
            </ClayDropDown.ItemList>
          </ClayDropDown>
        </ClayNavigationBar.Item>
      ) : (
        <></>
      )}
    </ClayNavigationBar>
  );
};

export default NavigationBar;
