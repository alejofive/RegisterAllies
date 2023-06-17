const Form4 = () => {
  return (
    <div>
      <section className="mt-6">
        <h3 className="text-xs text-white/95 font-semibold text-center">
          Termos e Condições
        </h3>
        <div className="w-full h-[249px] box-terminos mt-2">
          <div className="flex">
            <span className="mr-2">1.</span>
            <p>
              Reforço a recomendação de inclusão de dispositivos que prevejam a
              responsabilidade do associado pela guarda e correta utilização do
              link e/ou QR Code individual (Cláusulas 3, 4 e 5), conforme
              comentários inseridos na versão anterior, e não apenas
              responsabilidade pelos materiais, pois está na versão mais recente
              que você nos enviou através do link a seguir.
            </p>
          </div>
          <div className="flex">
            <span className="mr-2">1.</span>
            <p>
              Reforço a recomendação de inclusão de dispositivos que prevejam a
              responsabilidade do associado pela guarda e correta utilização do
              link e/ou QR Code individual (Cláusulas 3, 4 e 5), conforme
              comentários inseridos na versão anterior, e não apenas
              responsabilidade pelos materiais, pois está na versão mais recente
              que você nos enviou através do link a seguir.
            </p>
          </div>
        </div>
      </section>
      {/* alert */}
      <div className="box-info flex items-center py-2 px-4 mt-2  w-full">
        <img
          className="w-[24px] h-[24px] object-contain mr-2"
          src="./img/dolar.png"
          alt=""
        />
        <p className="text-xs font-semibold">
          Você ganha uma excelente porcentagem
        </p>
      </div>
      <section className="flex flex-col items-center justify-center mt-5">
        <div className="flex justify-center">
          <input type="checkbox" className="mr-2" />
          <p className="text-xs text-white/95 border-b">
            Aceita termos e Condições
          </p>
        </div>
        <button className="button-terminos mt-9">Cadastrar</button>
      </section>
    </div>
  );
};

export default Form4;
