import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "@/commons/auth";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  List,
} from "@/commons/components";

import RoleTable from "../components/RoleTable";
import getRoleListElement from "../services/getRoleListElement";

const DaftarRolePage = (props) => {
  const { checkPermission } = useAuth();
  const [role, setRole] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: roleListElement } = await getRoleListElement();
      setRole(roleListElement.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Daftar Role</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          <Link to="/settings/role/tambah">
            <Button className="mt-2 sm:mt-0">Tambah Role</Button>
          </Link>
        </div>
      </div>
      <div className="not-prose">
        <TableView {...{ role }} />
      </div>
    </div>
  );
};

const TableView = ({ role }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table className={"table-fixed sm:table-auto"}>
          <TableHead>
            <TableRow>
              <TableCell id="nama" isHeading>
                Nama
              </TableCell>
              <TableCell id="allowedPermissions" isHeading isHiddenMobile>
                AllowedPermissions
              </TableCell>
              <TableCell isHiddenMobile></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {role &&
              role.map((roleItem) => (
                <RoleTable key={roleItem.id} roleItem={roleItem} />
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DaftarRolePage;
