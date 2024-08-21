import NotificationsIcon from "@mui/icons-material/Notifications";
import styled, { useTheme } from "styled-components";

function Notification() {
  const theme = useTheme();
  return (
    <SearchSection>
      <NotificationsIcon sx={{ color: theme.colors.default }} />
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
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const NotificationBadge = styled.p`
  position: absolute;
  right: -0.2rem;
  top: -0.2rem;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeCount = styled.span`
  color: ${(props) => props.theme.colors.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

export default Notification;
