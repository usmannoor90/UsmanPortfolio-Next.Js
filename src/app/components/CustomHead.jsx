import { useEffect } from "react";
import { Helmet } from "react-helmet";

const CustomHead = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default CustomHead;
