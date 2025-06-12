import { Spinner } from "@/commons/components";

const ListContainerChartLayout = ({ title, isLoading, children }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl prose flex flex-col">
      <h2 className="text-center sm:text-left">{title}</h2>
      <div className="not-prose">
        {isLoading ? (
          <div className="py-8 text-center">
            <Spinner />
          </div>
        ) : (
          (children ?? (
            <div className="py-8 text-center">
              Tidak ada data untuk ditampilkan
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListContainerChartLayout;
