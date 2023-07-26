import StateContext from "../../../../store/StateContext";
/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import { useContext } from "react";

const TableStats = (props) => {
  let { categories, events, pastEvents, futureEvents } =
    useContext(StateContext);

  return (
    <>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>{props.titulo}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>{props.h1}</th>
            <th>{props.h2}</th>
            <th>{props.h3}</th>
          </tr>
        </thead>
        <tbody>
          {props.titulo == "Events Stats" ? (
            <TableRow eventos={events} titulo={"Events Stats"} />
          ) : (
            categories.map((cat, index) => {
              if (props.titulo === "Upcoming Events Stats") {
                return (
                  <TableRow
                    eventos={futureEvents}
                    categoria={cat}
                    key={index}
                    titulo={"Upcoming Events Stats"}
                  />
                );
              } else {
                return (
                  <TableRow
                    eventos={pastEvents}
                    categoria={cat}
                    key={index}
                    titulo={"Past Events Stats"}
                  />
                );
              }
            })
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableStats;
