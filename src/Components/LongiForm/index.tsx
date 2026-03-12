const LoginForm = () => {
  const handleLogin = () => {
    console.log("Usuário clicou em entrar");
  };

  return (
    <div className="w-full max-w-[450px] px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-amber-50">Entrar</h1>

      <p className="mt-2 text-sm text-amber-50 font-bold">
        Nome de usuário ou email
      </p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Email@explo.com"
          className="bg-[#130234] border-2 border-purple-600 rounded-lg p-3 w-full text-white"
        />

        <p className="text-stone-100 mt-4 font-bold">Senha</p>

        <input
          type="password"
          placeholder="Senha"
          className="bg-[#130234] border-2 border-purple-600 rounded-lg p-3 w-full mt-2 text-white"
        />

        <label className="flex items-center gap-2 mt-3 text-sm text-blue-50 cursor-pointer">
          <input type="checkbox" className="peer hidden" />

          <div className="w-5 h-5 border-2 border-purple-600 rounded flex items-center justify-center bg-black peer-checked:bg-purple-600 transition">
            <svg
              className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          Manter me conectado
        </label>
      </div>

      <a className="text-[#6528D3] text-sm mt-4 inline-block cursor-pointer hover:underline">
        Recupere sua senha
      </a>

      <button
        onClick={handleLogin}
        className="bg-purple-600 rounded-lg p-4 w-full mt-6 hover:bg-purple-700 text-amber-50 cursor-pointer transition"
      >
        Entrar
      </button>
    </div>
  );
};

export default LoginForm;