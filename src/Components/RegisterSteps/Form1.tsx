type Form1Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Form1: React.FC<Form1Props> = ({ setStep }) => {
  return (
    <form action="" className="mt-6">
      <div className="style-input">
        <label htmlFor="" className="font-semibold text-xs text-white">
          E-email
        </label>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          Número de telefone
        </label>
        <div className="mt-3 border-b-2 pb-3 flex">
          <img
            className="w-[32px] h-[22px] object-contain"
            src="./img/bandera.png"
            alt=""
          />
          <input
            type="text"
            className="bg-transparent ml-8"
            placeholder="000 000 000"
          />
        </div>
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
          placeholder="Digite seu Senha"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input relative mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          Confirme sua Senha
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
          placeholder="Digite seu Senha"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <button
        onClick={() => setStep(2)}
        className="mt-9 w-full style-button font-semibold text-base py-[14px]"
      >
        Próximo
      </button>
    </form>
  );
};

export default Form1;
