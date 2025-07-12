import Header from "@/components/Header/Header";
import React from "react";
import ExamsList from "./components/ExamsContent/ExamsContent";

export default function ExamsScreen() {
  return (
    <>
      <Header title="Oxigenação" />
      <ExamsList />
    </>
  );
}
