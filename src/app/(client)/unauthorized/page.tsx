export default function Redirect() {
  return (
    <>
     
     <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md mb-60 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
      <span className="font-medium">No estás autenticado.</span> Inicia sesión para seguir explorando.
    </div>
  </div>
    
    </>
  );
}
