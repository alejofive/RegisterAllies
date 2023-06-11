import { NavLink } from "react-router-dom";
import Cards from "../Components/Cards";
import Logo from "../Components/logo";
const Login3 = () => {
  return (
    <div className=" w-[341px]  pt-24 flex flex-col justify-center items-center">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12 w-[284px]">
        <div className="box-nav box-nav-active relative">
          <NavLink to="/login2" className="absolute left-2">
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
      {/* seleccione un tipo */}
      <section>
        <h3 className="text-[13px] font-semibold text-white/95 mt-6 text-center">
          Selecione o tipo de parceiro que melhor descreve você:
        </h3>
        <div className="grid grid-cols-8 gap-4 mt-8 px-3">
          <Cards />
        </div>

        <section className="w-[full] flex flex-col items-center mt-7">
          <div className=" w-[284px]">
            <NavLink to="/login4">
              <button className="mt-2 w-full style-button font-semibold text-base py-[14px]">
                Próximo
              </button>
            </NavLink>
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
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login3;
