import React from "react";

const ReconocimentosList = ({
  list,
  lang
}: {
  lang: string
  list: {
    festival?: string;
    premio?: string;
  }[];
}) => {
  const end = list.length;
  return (
    <div className="">
      <p className="uppercase opacity-60">{lang === "es" ? "Reconocimientos" : "Awards"}</p>
      <div>
        {list &&
          end < 11 &&
          list.map((empresa, i) => (
            <p key={i} className="font-bold md:text-lg">
              {empresa.festival}
              <span className="block ml-4 font-normal opacity-60">
                {empresa.premio && empresa.premio}
              </span>
            </p>
          ))}
        <div >
          {list && end >= 11 && (
            <div className="md:flex flex-1 gap-3 lg:gap-6">
              <div className="md:w-1/2">
                  {list.map((empresa, i) => {
                    if (i >= end / 2) return;
                    return (
                      <p key={i} className="font-bold md:text-lg">
                        {empresa.festival}
                        <span className="block  font-normal ml-1 opacity-60">
                          {empresa.premio && empresa.premio}
                        </span>
                      </p>
                    );
                  })}
              </div>
              <div className="md:w-1/2">
                  {list.map((empresa, i) => {
                    if (i < end / 2) return;
                    return (
                      <p key={i} className="font-bold">
                        {empresa.festival}
                        <span className="block  font-normal ml-1 opacity-60">
                          {empresa.premio && empresa.premio}
                        </span>
                      </p>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReconocimentosList;
