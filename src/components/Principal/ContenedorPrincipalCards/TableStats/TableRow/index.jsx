/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const TableRow = (props) => {
  let [ordenadosPorAsistencia, setOrdenadosPorAsistencia] = useState([]);
  let [ordenadosPorCapacidad, setOrdenadosPorCapacidad] = useState([]);

  useEffect(() => {
    const ordenarPorAsistencia = () => {
      const pasados = props.eventos.filter((evento) =>
        evento.hasOwnProperty("assistance")
      );

      const eventosOrdenados = pasados.sort(
        (a, b) => a.assistance / a.capacity - b.assistance / b.capacity
      );
      setOrdenadosPorAsistencia(eventosOrdenados);
    };
    ordenarPorAsistencia();

    const ordenarPorCapacidad = () => {
      const todos = props.eventos.filter((evento) =>
        evento.hasOwnProperty("capacity")
      );
      const ordenPorCapacidad = todos.sort((a, b) => a.capacity - b.capacity);
      setOrdenadosPorCapacidad(ordenPorCapacidad);
    };

    ordenarPorCapacidad();
  }, [props.eventos]);

  let ganancia = (categoria) => {
    let eventosCat = props.eventos.filter((e) => e.category == categoria);
    let suma = 0;
    eventosCat.forEach((ev) => {
      if (props.titulo == "Past Events Stats") {
        suma += ev.price * ev.assistance;
      } else {
        suma += ev.price * ev.estimate;
      }
    });
    return suma;
  };

  let asistencia = (categoria) => {
    let eventosCat = props.eventos.filter((e) => e.category == categoria);
    let porcentaje = 0;
    eventosCat.forEach((ev) => {
      if (props.titulo == "Past Events Stats") {
        porcentaje += (ev.assistance / ev.capacity) * 100;
      } else {
        porcentaje += (ev.estimate / ev.capacity) * 100;
      }
    });
    return Math.trunc(porcentaje / 7);
  };

  return (
    <>
      {props.titulo == "Events Stats" ? (
        <tr>
          <td>
            {ordenadosPorAsistencia.length > 0 &&
              ordenadosPorAsistencia[ordenadosPorAsistencia.length - 1].name +
                " - " +
                (ordenadosPorAsistencia[ordenadosPorAsistencia.length - 1]
                  .assistance /
                  ordenadosPorAsistencia[ordenadosPorAsistencia.length - 1]
                    .capacity) *
                  100 +
                "%"}
          </td>
          <td>
            {ordenadosPorAsistencia.length > 0 &&
              ordenadosPorAsistencia[0].name +
                " - " +
                (ordenadosPorAsistencia[0].assistance /
                  ordenadosPorAsistencia[0].capacity) *
                  100 +
                "%"}
          </td>
          <td>
            {ordenadosPorCapacidad.length > 0 &&
              ordenadosPorCapacidad[ordenadosPorCapacidad.length - 1].name +
                " - " +
                ordenadosPorCapacidad[ordenadosPorCapacidad.length - 1]
                  .capacity}
          </td>
        </tr>
      ) : (
        <tr>
          <td>{props.categoria}</td>
          <td>{"$" + ganancia(props.categoria)}</td>
          <td>{asistencia(props.categoria) + "%"}</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
