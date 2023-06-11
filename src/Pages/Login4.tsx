import { NavLink } from "react-router-dom";
import Logo from "../Components/logo";
const Login4 = () => {
  return (
    <div className="w-[330px] flex flex-col items-center pt-24">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12 w-[284px] ">
        <div className="box-nav box-nav-active relative">
          <NavLink to="/login3" className="absolute left-2">
            <img src="./img/flecha-right.png" alt="" />
          </NavLink>
          <button>
            <h3 className="font-semibold text-base text-white">Cadastrar</h3>
          </button>
        </div>
        <div className="box-nav ">
          <button>
            <h3 className="font-semibold text-base text-white">Login</h3>
          </button>
        </div>
      </nav>
      {/* terminos */}
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

      <section className="w-[249px] mt-7 flex flex-col items-center">
        <div className="flex">
          <input type="checkbox" className="mr-2" />
          <p className="text-xs text-white/95 border-b">
            Aceita termos e Condições
          </p>
        </div>
        <button className="button-terminos mt-9">Cadastrar</button>
        <div className="w-full h-[6px] bg-linea mt-4">
          <div className="bg-linea-porcentaje"></div>
        </div>
        <p className="text-porcentaje text-center mt-2">Passo 1/4</p>
        <div className="flex items-center justify-center">
          <div className="text-center  mt-3 pb-12">
            <p className="text-base text-white font-light w-full">
              © Copyright PlayGreen 2023 <br />
              <span className="font-normal w-full">
                Todos os direitos reservados
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login4;
