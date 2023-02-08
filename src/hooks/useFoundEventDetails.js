import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { foundEventDetails } from "../store/getEventDetailsSlice";
import { ROUTES } from "../routes/routeNames";

export const useFoundEventDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFoundEventDetails = useCallback(
    (eventId, array) => {
      const eventDetails = array.find((item) => item.id === eventId);

      dispatch(foundEventDetails(eventDetails));

      navigate(ROUTES.DETAILS_PAGE);
    },
    [dispatch, navigate]
  );

  return { handleFoundEventDetails };
};
