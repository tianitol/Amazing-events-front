import NavPrincipal from "../components/Principal/NavPrincipal";
import TableStats from "../components/Principal/ContenedorPrincipalCards/TableStats";

const Stats = () => {
  return (
    <>
      <NavPrincipal titulo={"Stats"} />
      <TableStats
        titulo={"Events Stats"}
        h1={"Event Highest % attendance"}
        h2={"Event lowest % attendance"}
        h3={"Event larger capacity"}
      />
      <TableStats
        titulo={"Upcoming Events Stats"}
        h1={"Categories"}
        h2={"Revenues"}
        h3={"%attendance"}
      />
      <TableStats
        titulo={"Past Events Stats"}
        h1={"Categories"}
        h2={"Revenues"}
        h3={"%attendance"}
      />
    </>
  );
};

export default Stats;
