type Login1Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Login1: React.FC<Login1Props> = ({ setStep }) => {
  return (
    <>
      {/* Formulario */}
      <form
        action=""
        className=" w-[284px] flex-col items-center justify-center m-0 mr-0"
      >
        <div className="style-input relative mt-6">
          <label htmlFor="" className="font-semibold text-xs text-white">
            E-mail ou Telefone
          </label>
          <button className="absolute right-0 bottom-4">
            <img
              className="w-[24px] h-[24px] object-contain"
              src="./img/visibility.png"
              alt=""
            />
          </button>
          <input
            type="text"
            placeholder="Digite seu e-mail ou telefone"
            className="w-full bg-transparent border-b-2 py-4 text-white"
          />
        </div>
        <div className="style-input relative mt-6">
          <label htmlFor="" className="font-semibold text-xs text-white">
            Senha
          </label>
          <button className="absolute right-0 bottom-4">
            <img
              className="w-[24px] h-[24px] object-contain"
              src="./img/visibility.png"
              alt=""
            />
          </button>
          <input
            type="text"
            placeholder="Digite seu senha"
            className="w-full bg-transparent border-b-2 py-4 text-white"
          />
        </div>
      </form>
      <button
        onClick={() => setStep(2)}
        className="mt-9 w-full style-button2 font-semibold text-base py-[14px] "
      >
        Confirmar
      </button>
    </>
  );
};

export default Login1;
