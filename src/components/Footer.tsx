import FooterCol from "./FooterCol";

export default function Footer() {
  return (
    <>
      <footer className="relative flex h-full w-screen flex-col items-center justify-evenly gap-10 bg-gray-950 py-20 text-sm lg:flex-row lg:items-start lg:gap-0">
        {/* bicykle */}
        <FooterCol
          title="Bicykle"
          titleLink="/bicykle"
          links={[
            { title: "Cestné", href: "/" },
            { title: "Allroad", href: "/" },
            { title: "Gravel", href: "/" },
            { title: "Časovka", href: "/" },
            { title: "Klasika", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />

        {/* Colnago */}
        <FooterCol
          title="Colnago"
          titleLink="/"
          links={[
            { title: "História", href: "/" },
            { title: "Technológie", href: "/" },
            { title: "Sieň slávy", href: "/" },
            { title: "Eventy", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />

        {/* Kontaktujte nás */}
        <FooterCol
          title="Kontakt"
          titleLink="/"
          links={[
            { title: "Predajne", href: "/" },
            { title: "Napíšte nám", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />
        <p className="absolute bottom-0 flex w-full justify-center text-gray-400">
          © Bigbike 2023, All Rights Reserved
        </p>
      </footer>
    </>
  );
}
