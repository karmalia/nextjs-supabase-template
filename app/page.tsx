import { supabaseAnon, supabaseAdmin } from "@/lib/supabase";
import Image from "next/image";

export default function Home() {
  async function setNewView() {
    const { data, error } = await supabaseAdmin.from("views").select("*");

    if (data) return data;
    if (error) {
      console.log("error", error);
      return null;
    }
  }

  setNewView();

  return (
    <main>
      {setNewView()
        .then((data) => {
          return data.map((view) => {
            return <div key={view.id}>{view.name}</div>;
          });
        })
        .catch((error) => (
          <span>{error}</span>
        ))}
    </main>
  );
}
