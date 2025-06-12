import PropTypes from "prop-types";
import Label from "../Label";
import ReactHTMLParser from "html-react-parser";

const BlockHTML = ({ content, label }) => {
  return (
    <>
      <Label label={label} />
      <div className="prose [&_:where([class~=ql-align-center])]:text-center [&_:where([class~=ql-align-right])]:text-right [&_:where([class~=ql-align-justify])]:text-justify prose-a:text-blue-600 prose-a:underline prose-headings:mt-0 prose-headings:mb-0.5 prose-p:mt-0.5 prose-p:mb-0.5 prose-img:mt-0.5 prose-img:mb-0.5">
        {ReactHTMLParser(content)}
      </div>
    </>
  );
};

BlockHTML.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockHTML;
