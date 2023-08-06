"use client";
import { use, useEffect, useState } from "react";
import React from "react";

export default function WhyColnago() {
  type HeaderType =
    | "Esencia"
    | "Majstrovstvo"
    | "Taliansko"
    | "Hrdosť"
    | "Zvodnosť"
    | "Exkluzivita"
    | "Dedictvo";

  const headers: HeaderType[] = [
    "Esencia",
    "Majstrovstvo",
    "Taliansko",
    "Hrdosť",
    "Zvodnosť",
    "Exkluzivita",
    "Dedictvo",
  ];

  const [header, setHeader] = useState<HeaderType>("Esencia");
  const [text, setText] = useState<string>(
    "Neusilujeme o nic jiného než o dokonalost. Ve všem, co děláme, usilujeme o to nejlepší. Odvážný a vítězný postoj šampionů nás inspiruje k vytváření průkopnických zážitků."
  );

  useEffect(() => {
    switch (header) {
      case "Esencia":
        setText(
          "Neusilujeme o nic jiného než o dokonalost. Ve všem, co děláme, usilujeme o to nejlepší. Odvážný a vítězný postoj šampionů nás inspiruje k vytváření průkopnických zážitků."
        );
        break;
      case "Majstrovstvo":
        setText(
          "Vedl nás skutečný Mistr: Ernesto Colnago, odborník a vizionář. Stále nosíme jeho moudrost a řemeslnou zručnost, abychom vytvořili vynikající zážitky a spolehlivé špičkové produkty. Jsme průkopníci, snažíme se navrhovat budoucnost již dnes."
        );
        break;
      case "Taliansko":
        setText(
          "Italská vášeň nám koluje v žilách. Usilujeme o odkaz stylu, vysoké kvality a jemných detailů, které daly místo nejtrvalejším a nejatraktivnějším kulturám na Zemi."
        );
        break;
      case "Hrdosť":
        setText(
          "Jsme hrdí na svá vítězství. Jsme hrdí na naši historii a hrdí na to, čím se máme stát. Naše dlouhá cesta triumfů vede k naší budoucnosti. Obdivujeme věčnou krásu řemesla a umění a snažíme se takový obdiv zprostředkovat."
        );
        break;
      case "Zvodnosť":
        setText(
          "Sledujeme tvary, barvy a linie, které definují svůdnost. Vyvoláváme emoce prostřednictvím našich vynikajících a ctižádostivých životních zkušeností. Vytváříme atraktivní a dechberoucí produkty, které nutí lidi otáčet se v úžasu."
        );
        break;
      case "Exkluzivita":
        setText(
          "Vytváříme ikonické, elegantní a průlomové produkty, které povyšují každodenní životní standardy a inspirují každého člověka, aby zažil sofistikovaný a exkluzivní způsob života."
        );
        break;
      case "Dedictvo":
        setText(
          "Hluboce ctíme naše dědictví – historii plnou inovací, vítězství a slávy. Obdivujeme krásu a eleganci legendárního umění. Žijeme, abychom zvěčnili ikonu, kterou Colnago představuje."
        );
        break;
      default:
        setText(
          "Neusilujeme o nic jiného než o dokonalost. Ve všem, co děláme, usilujeme o to nejlepší. Odvážný a vítězný postoj šampionů nás inspiruje k vytváření průkopnických zážitků."
        );
        break;
    }
  }, [header]);

  return (
    <>
      <div className="flex flex-col gap-12 text-slate-900 xl:w-[45vw] w-full">
        <div>
          <h3 className="text-[#b59251] text-sm uppercase tracking-widest">
            Prečo vlastniť Colnago
          </h3>
          <h1 className="text-4xl italic font-bold">Colnago DNA</h1>
        </div>

        <div className="flex items-center md:h-[40vh] h-[80vh]">
          <div className="border border-[#b59251] p-12 w-2/3 space-y-4 h-full">
            <h3 className="text-[#b59251] font-bold text-2xl">{header}</h3>
            <p className="whitespace-break-spaces">{text}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-start w-1/3 h-full gap-y-4">
              {headers.map((selectedHeader) => (
                <button
                  value={selectedHeader}
                  key={selectedHeader}
                  onClick={() => setHeader(selectedHeader)}
                  className={
                    selectedHeader === header
                      ? "text-[#b59251] border-b-[1.5px] border-[#b59251] border-spacing-y-1 transition-all duration-300 ease-in-out w-max"
                      : "text-[#969696] hover:text-[#b59251] hover:border-b-[1.5px] border-b-[1.5px] border-transparent hover:border-[#b59251] border-spacing-y-1 transition-all duration-300 ease-in-out w-max"
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
