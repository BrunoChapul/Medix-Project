import styled, { useTheme } from "styled-components";
import LogoImg from "../../_assets/images/logo.svg";

// Components
import Text from "../Ui/Text";
import Btn from "../Ui/Btn";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

// Router
import { NavLink } from "react-router-dom";

function Nav() {
  const theme = useTheme();

  const links = [
    {
      to: "/overview",
      label: "Overview",
      icon: <SpaceDashboardIcon aria-label="Dashboard icon" />,
    },
    {
      to: "/activity",
      label: "Booking Activity",
      icon: <InsightsOutlinedIcon aria-label="Dashboard icon" />,
    },
  ];

  return (
    <Container>
      <LogoImage src={LogoImg} alt="Logo" />
      <NavContent>
        <Text color={theme.colors.main} size="0.8rem" weight="700">
          Tools
        </Text>

        {links.map((link) => (
          <StyledNavLink key={link.to} to={link.to}>
            {({ isActive }) => (
              <Btn
                active={isActive}
                bgColor={isActive ? theme.colors.primary : theme.colors.default}
                txtColor={isActive ? theme.colors.default : theme.colors.main}
                hvrBgColor={!isActive ? theme.colors.primary : null}
                hvrColor={!isActive ? theme.colors.default : null}
                width="100%"
              >
                {link.icon}
                {link.label}
              </Btn>
            )}
          </StyledNavLink>
        ))}
      </NavContent>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: -5px 0px 7px ${(props) => props.theme.colors.main};
  flex-wrap: wrap;
  padding: 2rem 1.4rem;
`;

const NavContent = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
`;

const LogoImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export default Nav;
