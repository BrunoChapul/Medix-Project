import styled, { useTheme } from "styled-components";
import Card from "../Global/Card";

// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PaidIcon from "@mui/icons-material/Paid";

function BookingInfo() {
  const theme = useTheme();

  const bookings = [
    {
      id: 1,
      icon: <CalendarMonthIcon sx={{ color: theme.colors.primary }} />,
      total: 33,
      name: "Total Booking",
    },
    {
      id: 2,
      icon: <EventAvailableIcon sx={{ color: theme.colors.tertiary }} />,
      total: 22,
      name: "Booking Success",
    },
    {
      id: 3,
      icon: <EventBusyIcon sx={{ color: theme.colors.primary }} />,
      total: 12,
      name: "Booking Cancel",
    },
    {
      id: 4,
      icon: <PaidIcon sx={{ color: theme.colors.tertiary }} />,
      total: "$" + 50,
      name: "Paid Amount",
    },
  ];

  return (
    <Grid>
      {bookings.map((booking) => (
        <Card key={booking.id}>
          <Wrapper>
            <Icon>{booking.icon}</Icon>
            <Info>
              <Total>{booking.total}</Total>
              <TotalName>{booking.name}</TotalName>
            </Info>
          </Wrapper>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.div`
  background: ${(props) => props.theme.colors.primary + 11};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 5rem;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const Total = styled.h2`
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.typography.boldFontFamily};
  width: 100%;
  font-size: 2.3rem;
  font-weight: bold;
`;

const TotalName = styled.p`
  color: ${(props) => props.theme.colors.main};
  width: 100%;
  font-size: 1rem;
`;

export default BookingInfo;
