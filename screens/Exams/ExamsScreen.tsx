import Header from "@/components/Header/Header";
import React from "react";
import ExamsList from "./components/ExamsContent/ExamsContent";
import FieldOrdering from "../../components/FieldOrdering/FieldOrdering";
import { Fields } from "../../components/FieldOrdering/FieldOrdering.types";
import AddButton from "@/components/AddButton/AddButton";

export default function ExamsScreen() {
  const examsFields: Fields[] = ["DATA", "RNI", "HEMA", "MARE"];

  return (
    <>
      <Header title="Exames">
        <FieldOrdering fields={examsFields} />
      </Header>
      <ExamsList />
      <AddButton />
    </>
  );
}
