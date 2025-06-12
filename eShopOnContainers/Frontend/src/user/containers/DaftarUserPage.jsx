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

import UserTable from "../components/UserTable";
import getUserListElement from "../services/getUserListElement";

const DaftarUserPage = (props) => {
  const { checkPermission } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: userListElement } = await getUserListElement();
      setUser(userListElement.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Daftar User</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          <Link to="/settings/user/tambah">
            <Button className="mt-2 sm:mt-0">Tambah User</Button>
          </Link>
        </div>
      </div>
      <div className="not-prose">
        <TableView {...{ user }} />
      </div>
    </div>
  );
};

const TableView = ({ user }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table className={"table-fixed sm:table-auto"}>
          <TableHead>
            <TableRow>
              <TableCell id="nama" isHeading>
                Nama
              </TableCell>
              <TableCell id="email" isHeading>
                Email
              </TableCell>
              <TableCell isHiddenMobile></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user &&
              user.map((userItem) => (
                <UserTable key={userItem.id} userItem={userItem} />
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DaftarUserPage;
