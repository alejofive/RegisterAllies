type Form2Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Form2: React.FC<Form2Props> = ({ setStep }) => {
  return (
    <form action="" className="mt-6">
      <div className="style-input">
        <label htmlFor="" className="font-semibold text-xs text-white">
          Nome de usuário
        </label>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input relative mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          Nome da empresa ou pessoa física
        </label>
        <input
          type="text"
          placeholder="Digite seu nome da empresa"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input relative mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          Endereço da empresa (se tiver)
        </label>

        <input
          type="text"
          placeholder="Digite seu endereço"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input relative mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          CEP
        </label>

        <input
          type="text"
          placeholder="Digite seu CEP"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      <div className="style-input relative mt-6">
        <label htmlFor="" className="font-semibold text-xs text-white">
          CNPJ o CPF
        </label>

        <input
          type="text"
          placeholder="Digite seu CNPJ ou CPF"
          className="w-full bg-transparent border-b-2 py-4 text-white"
        />
      </div>
      {/* alert */}
      <div className="box-info flex items-center py-1 px-2 mt-2">
        <img
          className="w-[16px] h-[16px] object-contain mr-2"
          src="./img/info.png"
          alt=""
        />
        <p className="text-xs">
          Se você não possui uma conta PlayGreen, iremos redirecioná-lo para
          completar seu cadastro e se tornar um parceiro
        </p>
      </div>

      <button
        onClick={() => setStep(3)}
        className="mt-2 w-full style-button font-semibold text-base py-[14px]"
      >
        Próximo
      </button>
    </form>
  );
};

export default Form2;
