import { AuthButtonServer } from "@/components/navbar/auth-button-server";
import { ButtonServer } from "@/components/navbar/button-server";

export default function Login() {
  return (
    <section className="flex h-screen justify-center items-center flex-col gap-5">
      <div className="w-96 h-96 flex justify-center items-center border flex-col p-4 gap-10">
        <h1 className="text-2xl text-balance text-center">
          Para acceder al contenido inicia session primero
        </h1>
        <AuthButtonServer />
      </div>
    </section>
  );
}
