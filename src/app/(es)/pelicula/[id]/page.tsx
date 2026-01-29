import Ficha from "@/components/general UI/Ficha";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="h-full">
      <Ficha id={id} lang="es" />
    </div>
  );
};

export default page;
