import ButtonReusable from "~/app/components/Buttons/ButtonReusable";
import MainImage from "~app/assets/images/colnago.jpg";
export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-white w-screen">
        <section
          className="w-full h-[85vh]"
          style={{
            aspectRatio: "auto auto",
            background:
              'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url("https://cdn.myshoptet.com/usr/www.colnago.cz/user/banners/c68.jpg?64413bd0") center 100% no-repeat transparent',
          }}
        >
          <div className="relative w-screen h-full">
            <div className="absolute bottom-[30vh] left-40 md:w-1/2 xl:w-1/4">
              <div className="pb-10">
                <h3>Colnago</h3>
                <p className="text-5xl font-extrabold italic">
                  C68 - made in Italy
                </p>
              </div>
              <ButtonReusable variant="primary">Viac informácií</ButtonReusable>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full h-screen text-black">
          <div className="border-b-[0.5px] border-slate-900 w-screen py-10 flex justify-center relative">
            <span className="absolute bottom-[-1px] border-b-[1.5px] border-[#b59251] w-[10rem]" />
            <span className="absolute bottom-[8px] text-center text-[#b59251] text-xs uppercase tracking-widest">
              Bicykle Colnago
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
