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
    "Neusilujeme sa o nič iné ako o dokonalosť. Vo všetkom, čo robíme, usilujeme o to najlepšie. Odvážny a víťazný postoj šampiónov nás inšpiruje k vytváraniu priekopníckych zážitkov.",
  Majstrovstvo:
    "Viedol nás skutočný Majster: Ernesto Colnago, odborník a vizionár. Stále nosíme jeho múdrosť a remeselnú zručnosť, aby sme vytvorili vynikajúce zážitky a spoľahlivé špičkové produkty. Sme priekopníci, snažíme sa navrhovať budúcnosť už dnes.",
  Taliansko:
    "Talianska vášeň nám koluje v žilách. Usilujeme sa o odkaz štýlu, vysokej kvality a jemných detailov, ktoré dali miesto najtrvalejším a najatraktívnejším kultúram na Zemi.",
  Hrdosť:
    "Sme hrdí na svoje víťazstvá. Sme hrdí na našu históriu a hrdí na to, čím sa máme stať. Naša dlhá cesta triumfov vedie k našej budúcnosti. Obdivujeme večnú krásu remesla a umenia a snažíme sa taký obdiv sprostredkovať.",
  Zvodnosť:
    "Sledujeme tvary, farby a línie, ktoré definujú zvodnosť. Vyvolávame emócie prostredníctvom našich vynikajúcich a ctižiadostivých životných skúseností. Vytvárame atraktívne a dych vyrážajúce produkty, ktoré nútia ľudí otáčať sa v úžase.",
  Exkluzivita:
    "Vytvárame ikonické, elegantné a prelomové produkty, ktoré povyšujú každodenné životné štandardy a inšpirujú každého človeka, aby zažil sofistikovaný a exkluzívny spôsob života.",
  Dedictvo:
    "Hlboko ctíme naše dedičstvo - históriu plnú inovácií, víťazstva a slávy. Obdivujeme krásu a eleganciu legendárneho umenia. Žijeme, aby sme zvečnili ikonu, ktorú Colnago predstavuje.",
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
