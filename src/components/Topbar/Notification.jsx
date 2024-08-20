import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "styled-components";

function Notification() {
  return (
    <SearchSection>
      <NotificationsIcon sx={{ color: "#FFF" }} />
      <NotificationBadge>
        <BadgeCount>2</BadgeCount>
      </NotificationBadge>
    </SearchSection>
  );
}

const SearchSection = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5rem;
  padding: 1rem;
  background: #2380ea;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
`;

const NotificationBadge = styled.p`
  position: absolute;
  right: -0.2rem;
  top: -0.2rem;
  background: red;
  border-radius: 5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeCount = styled.span`
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export default Notification;
