import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../routes/routeNames";

import DetailsPageLayout from "../components/DetailsPageLayout";
import useMakeBit from "../../../hooks/useMakeBit";

const DetailsPageContainer = () => {
  const navigate = useNavigate();

  const { eventDetails, eventValue } = useSelector(
    (state) => state.eventDetailsData
  );

  const { handleMakeBid, handleEventChange } = useMakeBit();

  useEffect(() => {
    if (eventDetails.title === undefined) {
      navigate(ROUTES.HOME_PAGE);
    }
  }, [navigate, eventDetails.title]);

  return (
    <DetailsPageLayout
      eventDetails={eventDetails}
      eventValue={eventValue}
      handleEventChange={handleEventChange}
      handleMakeBid={handleMakeBid}
    />
  );
};

export default DetailsPageContainer;
