import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import environment from "@/commons/utils/environment";

import StaticPageBuilder from "@/staticPage/components/StaticPageBuilder";

const StaticPageEdit = () => {
  const { staticPageId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [htmlData, setHtmlData] = useState();
  const [cssData, setCssData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${environment.staticServerApi}/static-data/${staticPageId}`,
        );
        setHtmlData(response.data.htmlData);
        setCssData(response.data.cssData);
        setIsLoading(false);
        setIsError(false);
        setErrorMessage("");
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(
          e?.response?.statusText || "Failed, please try again later!",
        );
      }
    };

    fetchData();
  }, [staticPageId]);

  const actionRedirectToDetailPage = () => {
    navigate(`/${staticPageId}`);
  };

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error - {errorMessage}</p>;

  return (
    <StaticPageBuilder
      staticId={staticPageId}
      initialComponentData={htmlData}
      initialStyleData={cssData}
      isEditMode={true}
      actionRedirectToDetailPage={actionRedirectToDetailPage}
    />
  );
};

export default StaticPageEdit;
