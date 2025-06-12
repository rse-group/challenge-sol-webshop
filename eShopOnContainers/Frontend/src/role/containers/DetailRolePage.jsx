import { Button } from "@/commons/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import DetailRole from "../components/DetailRole";
import getRoleDetail from "../services/getRoleDetail";

const DetailRolePage = (props) => {
  const [role, setRole] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: roleDetail } = await getRoleDetail({ id });
      setRole(roleDetail.data);
    };
    fetchData();
  }, []);

  return role ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <Link to={`/settings/role`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <h2>Detail Role</h2>
      <DetailRole {...{ role }} />
    </div>
  ) : (
    <></>
  );
};

export default DetailRolePage;
