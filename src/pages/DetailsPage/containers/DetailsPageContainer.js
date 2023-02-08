import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { handleSelectValueChange } from "../../../store/getEventDetailsSlice";

import { ROUTES } from "../../../routes/routeNames";

import DetailsPageLayout from "../components/DetailsPageLayout";

const DetailsPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { eventDetails, eventValue } = useSelector(
    (state) => state.eventDetailsData
  );

  const handleEventChange = useCallback(
    (e) => {
      dispatch(handleSelectValueChange(e.target.value));
    },
    [dispatch]
  );

  const handleMakeBid = useCallback(() => {
    navigate(ROUTES.HOME_PAGE);
  }, [navigate]);

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
