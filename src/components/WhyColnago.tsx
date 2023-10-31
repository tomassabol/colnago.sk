"use client";
import { useEffect, useState } from "react";

const headers = [
  "Esencia",
  "Majstrovstvo",
  "Taliansko",
  "Hrdosť",
  "Zvodnosť",
  "Exkluzivita",
  "Dedictvo",
] as const;

const headerTextMap = {
  Esencia:
    "Neusilujeme o nic jiného než o dokonalost. Ve všem, co děláme, usilujeme o to nejlepší. Odvážný a vítězný postoj šampionů nás inspiruje k vytváření průkopnických zážitků.",
  Majstrovstvo:
    "Vedl nás skutečný Mistr: Ernesto Colnago, odborník a vizionář. Stále nosíme jeho moudrost a řemeslnou zručnost, abychom vytvořili vynikající zážitky a spolehlivé špičkové produkty. Jsme průkopníci, snažíme se navrhovat budoucnost již dnes.",
  Taliansko:
    "Italská vášeň nám koluje v žilách. Usilujeme o odkaz stylu, vysoké kvality a jemných detailů, které daly místo nejtrvalejším a nejatraktivnějším kulturám na Zemi.",
  Hrdosť:
    "Jsme hrdí na svá vítězství. Jsme hrdí na naši historii a hrdí na to, čím se máme stát. Naše dlouhá cesta triumfů vede k naší budoucnosti. Obdivujeme věčnou krásu řemesla a umění a snažíme se takový obdiv zprostředkovat.",
  Zvodnosť:
    "Sledujeme tvary, barvy a linie, které definují svůdnost. Vyvoláváme emoce prostřednictvím našich vynikajících a ctižádostivých životních zkušeností. Vytváříme atraktivní a dechberoucí produkty, které nutí lidi otáčet se v úžasu.",
  Exkluzivita:
    "Vytváříme ikonické, elegantní a průlomové produkty, které povyšují každodenní životní standardy a inspirují každého člověka, aby zažil sofistikovaný a exkluzivní způsob života.",
  Dedictvo:
    "Hluboce ctíme naše dědictví - historii plnou inovací, vítězství a slávy. Obdivujeme krásu a eleganci legendárního umění. Žijeme, abychom zvěčnili ikonu, kterou Colnago představuje.",
};

export default function WhyColnago() {
  const [header, setHeader] = useState<(typeof headers)[number]>(headers[0]);
  const [text, setText] = useState<string>(headerTextMap[headers[0]]);

  useEffect(() => {
    setText(headerTextMap[header]);
  }, [header]);

  return (
    <>
      <div className="flex w-full flex-col gap-12 text-slate-900 xl:w-[45vw]">
        <div>
          <h5 className="text-sm uppercase tracking-widest text-[#b59251]">
            Prečo vlastniť Colnago
          </h5>
          <h3 className="text-4xl font-bold italic">Colnago DNA</h3>
        </div>

        <div className="flex h-[60vh] items-center md:h-[40vh]">
          <div className="h-full w-2/3 space-y-4 border border-[#b59251] p-6 lg:p-12">
            <h3 className="text-2xl font-bold text-[#b59251]">
              {header as string}
            </h3>
            <p className="whitespace-break-spaces">{text}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-full w-1/3 flex-col items-start justify-center gap-y-4">
              {headers.map((selectedHeader) => (
                <button
                  value={selectedHeader}
                  key={selectedHeader}
                  onClick={() =>
                    setHeader(selectedHeader as (typeof headers)[number])
                  }
                  className={
                    selectedHeader === header
                      ? "w-max border-spacing-y-1 border-b-[1.5px] border-[#b59251] text-[#b59251] transition-all duration-300 ease-in-out"
                      : "w-max border-spacing-y-1 border-b-[1.5px] border-transparent text-[#969696] transition-all duration-300 ease-in-out hover:border-b-[1.5px] hover:border-[#b59251] hover:text-[#b59251]"
                  }
                >
                  {selectedHeader}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
