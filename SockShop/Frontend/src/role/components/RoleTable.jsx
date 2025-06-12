import React from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, TableRow, TableCell, Modal } from "@/commons/components";
import { isMobile } from "@/commons/utils/responsive";

const RoleTable = ({ roleItem }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async () => {
    isMobile() && navigate(`/settings/role/${roleItem.id}`);
  };

  return (
    <TableRow distinct={false} onClick={detail}>
      {/* Data Binding Role Table Element*/}
      <TableCell>{roleItem?.name}</TableCell>
      <TableCell isHiddenMobile>{roleItem?.allowedPermissions}</TableCell>
      <TableCell isHiddenMobile>
        <div className="flex btn-group gap-2">
          {/* View Element Event Role Table Element*/}
          <Link to={`/settings/role/${roleItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default RoleTable;
