import { calculateDayRemaining } from "@/commons/utils/calculateDayRemaining";
import React from "react";
import PropTypes from "prop-types";

const ListMobileFirst = ({ label, content, condition }) => {
  const checkIsImage = (content) => {
    if (content.match(/\.(jpeg|jpg|gif|png)*/) != null) return true;
    return content.match(/(data:image)/) != null;
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

    const options = { day: "numeric", month: "short", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("id-ID", options);
    const formattedDate = formatter.format(new Date(year, month, day));

    return formattedDate;
  };

  const isImage = typeof content == "string" && checkIsImage(content);
  const isArray = checkIsArray(content);
  const isCurrency = condition === "isCurrency";
  const isDayRemaining = condition === "isDayRemaining";
  const isStatus = condition === "isStatus";

  return (
    <>
      {isCurrency ? (
        <div className="mb-1">
          <p className="pl-4 pr-4 text-gray-500 m-0 text-xs">{label}: </p>
          <h4 className="pl-4 pr-4 mt-0 mb-0">
            {formatCurrency(content) ?? "-"}
          </h4>
        </div>
      ) : isImage ? (
        <img
          src={content}
          alt={label}
          className="aspect-[4/3] w-full h-full object-cover rounded-btn overflow-hidden m-0"
        />
      ) : isDayRemaining ? (
        <div className="flex mt-1">
          <p className="pl-4 pr-4 text-gray-500 m-0 text-xs">Sisa hari </p>
          <p
            className={`text-xs m-0 ${calculateDayRemaining(content) < 0 ? "text-red-500" : ""}`}
          >
            {calculateDayRemaining(content) < 0
              ? "Sudah Berakhir"
              : calculateDayRemaining(content) + " hari"}
          </p>
        </div>
      ) : isArray ? (
        content.map((content, index) => <div key={index}>{content}</div>)
      ) : (
        <div className="mb-1">
          {label && (
            <p className="pl-4 pr-4 text-gray-500 m-0 text-xs">{label}: </p>
          )}
          <h4 className={`pl-4 pr-4 mt-0 mb-0 ${statusColor(content)}`}>
            {isDateFormat(content)
              ? formatToHumanDate(content)
              : (content ?? "-")}
          </h4>
        </div>
      )}
    </>
  );
};

ListMobileFirst.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  condition: PropTypes.string,
};

export default ListMobileFirst;
