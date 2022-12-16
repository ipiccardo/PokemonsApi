import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoveTableData from "./MoveTableData";

const MoveTable = ({ moves }) => {
  const [urlArrayMoves, setUrlArrayMoves] = useState([]);
  const [moveData, setMoveData] = useState([]);
  const [learnedMethod, setLearnedMethod] = useState([]);

  useEffect(() => {
    moves?.map(({ move: { url } }) => {
      return (
        setUrlArrayMoves((urlArrayMoves) => [...urlArrayMoves, url])
        )
    });
  }, [moves]);

  useEffect(() => {
    urlArrayMoves?.map((url) => {
      return (
        axios
        .get(url)
        .then(({ data }) => setMoveData((moveData) => [...moveData, data]))
        )
      })
  }, [urlArrayMoves]);

  useEffect(() => {
    moves.map((move) => {
      return (
        move.version_group_details[move.version_group_details.length - 1] &&
        setLearnedMethod((learnedMethod) => [
          ...learnedMethod,
          {
            name: move.move.name,
            level:
            move.version_group_details[move.version_group_details.length - 1]
                .level_learned_at,
            method:
              move.version_group_details[move.version_group_details.length - 1]
              .move_learn_method.name,
            },
          ])
          )
    });
  }, [moves]);

  return (
    <div>
      <MoveTableData moveData={moveData} learnedMethod={learnedMethod} />
    </div>
  );
};

export default MoveTable;
