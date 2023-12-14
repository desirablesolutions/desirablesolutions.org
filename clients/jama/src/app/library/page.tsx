import Masonry from "@components/Masonry";
import { usePage } from "@hooks/usePage";
import { definePage } from "blakprint";

export default async function Home() {

  const { data } = await usePage("library");

  const Component = definePage(() => {

    const { masonry } = data;

    return (
      <main className="relative flex flex-col items-center justify-between min-h-screen p-2 m-0">
      <Masonry masonry={masonry} />
    </main>
    );
  });

  return Component.value();
}
