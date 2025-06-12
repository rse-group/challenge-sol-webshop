import { calculateDayRemaining } from "@/commons/utils/calculateDayRemaining";
import React from "react";
import PropTypes from "prop-types";

const DetailMobileFirst = ({ label, content, condition }) => {
  const checkIsImage = (content) => {
    if (content.match(/\.(jpeg|jpg|gif|png)/) != null) return true;
    return content.match(/(data:image)/) != null;
  };

  const checkIsURL = (content) => {
    if (content.match(/@/) != null) return false;
    return (
      content.match(/^(?!mailto:)(?:https?:\/\/)?(?:www\.)?\S+\.\S+/) != null
    );
  };

  const statusColor = (status) => {
    if (!isStatus) return "";
    switch (status) {
      case "BERHASIL":
        return "text-green-500";
      case "PENDING":
        return "text-yellow-500";
      case "DITOLAK":
        return "text-red-500";
      default:
        return "";
    }
  };

  const checkIsArray = (content) => {
    return content instanceof Array;
  };

  const formatCurrency = (amount) => {
    if (isNaN(amount)) return amount;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const isDateFormat = (content) => {
    if (typeof content != "string") return false;
    return content?.match(/^\d{4}-\d{2}-\d{2}$/) != null;
  };

  const formatToHumanDate = (dateString) => {
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Month in JavaScript Date object is zero-based
    const day = parseInt(dateParts[2]);

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("id-ID", options);
    const formattedDate = formatter.format(new Date(year, month, day));

    return formattedDate;
  };

  const formatToURL = (content) => {
    if (content.match(/^(http|https):\/\//) != null) return content;
    return `https://${content}`;
  };

  const isImage = typeof content == "string" && checkIsImage(content);
  const isURL = typeof content == "string" && checkIsURL(content);
  const isArray = checkIsArray(content);
  const isDayRemaining = condition === "isDayRemaining";
  const isCurrency = !isNaN(parseInt(content)) && condition === "isCurrency";
  const isStatus = condition === "isStatus";
  const textStyle = condition === "title" ? "text-lg" : "text-base";

  return (
    <>
      {isCurrency ? (
        <div className="pl-4 pr-4 mb-4">
          <p className="text-gray-500 m-0 text-xs">{label}</p>
          <h3 className={"mt-0 mb-0 text-justify text-base"}>
            {formatCurrency(content)}
          </h3>
        </div>
      ) : isImage ? (
        <img
          src={content}
          alt={label}
          className="aspect-video w-full object-cover m-0"
        />
      ) : isDayRemaining ? (
        <div className="pl-4 pr-4">
          <p className="text-gray-500 m-0 text-xs">Sisa hari </p>
          <h3
            className={`text-base mt-0 mb-0 ${calculateDayRemaining(content) < 0 ? "text-red-500" : ""}`}
          >
            {calculateDayRemaining(content) < 0
              ? "Sudah Berakhir"
              : calculateDayRemaining(content) + " hari"}
          </h3>
        </div>
      ) : isArray ? (
        content.map((content, index) => <div key={index}>{content}</div>)
      ) : (
        <div className="pl-4 pr-4 mb-4">
          <p className="text-gray-500 m-0 text-xs">{label}</p>
          <h3 className={`mt-0 mb-0 ${textStyle} ${statusColor(content)}`}>
            {isDateFormat(content) ? (
              formatToHumanDate(content)
            ) : isURL ? (
              <a href={formatToURL(content)} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              (content ?? "-")
            )}
          </h3>
        </div>
      )}
    </>
  );
};

DetailMobileFirst.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  condition: PropTypes.string,
};

export default DetailMobileFirst;
