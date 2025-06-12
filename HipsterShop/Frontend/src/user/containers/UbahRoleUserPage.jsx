import { Button } from "@/commons/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import getUser from "../services/getUser";
import getRoles from "../services/getRoles";

import FormUbahRoleUser from "../components/FormUbahRoleUser";

const UbahRoleUserPage = (props) => {
  const { id } = useParams()

  const [user, setUser] = useState();
  const [roles, setRoles] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data: userResponse } = await getUser({ id });
      const { data: rolesResponse } = await getRoles();

      setUser(userResponse.data);
      setRoles(rolesResponse.data);
    };
    fetch();
  }, []);

  return user && roles ? (
    <div>
      <Link to={`/settings/user/${id}`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <FormUbahRoleUser {...{ user, roles }} {...props} />
    </div>
  ) : (
    <></>
  );
};

export default UbahRoleUserPage;
