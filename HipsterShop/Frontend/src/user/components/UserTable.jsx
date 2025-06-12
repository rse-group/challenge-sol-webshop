import React from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, TableRow, TableCell, Modal } from "@/commons/components";
import { isMobile } from "@/commons/utils/responsive";

const UserTable = ({ userItem }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async () => {
    isMobile() && navigate(`/settings/user/${userItem.id}`);
  };

  return (
    <TableRow distinct={false} onClick={detail}>
      {/* Data Binding User Table Element*/}
      <TableCell>{userItem?.name}</TableCell>
      <TableCell>{userItem?.email}</TableCell>
      <TableCell isHiddenMobile>
        <div className="flex btn-group gap-2">
          {/* View Element Event User Table Element*/}
          <Link to={`/settings/user/${userItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserTable;
