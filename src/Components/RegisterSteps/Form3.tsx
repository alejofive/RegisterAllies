import Cards from "../Cards";
type Form2Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const Form3: React.FC<Form2Props> = ({ setStep }) => {
  return (
    <section>
      <h3 className="text-[13px] font-semibold text-white/95 mt-6 text-center">
        Selecione o tipo de parceiro que melhor descreve você:
      </h3>
      <div className="grid grid-cols-8 gap-4 mt-8 px-3">
        <Cards />
      </div>

      <section className="w-[full] flex flex-col items-center mt-7">
        <div className=" w-[284px]">
          <button
            onClick={() => setStep(4)}
            className="mt-2 w-full style-button font-semibold text-base py-[14px]"
          >
            Próximo
          </button>
        </div>
      </section>
    </section>
  );
};

export default Form3;
