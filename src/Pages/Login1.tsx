import { NavLink } from "react-router-dom";
import Logo from "../Components/logo";
const login1 = () => {
  return (
    <div className="w-[284px] pt-24">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12">
        <div className="box-nav box-nav-active relative">
          <div className="absolute left-2">
            <img src="./img/flecha-right.png" alt="" />
          </div>
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
      {/* formulario */}
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
        <NavLink to="/login2">
          <button className="mt-9 w-full style-button font-semibold text-base py-[14px]">
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
      </form>
    </div>
  );
};

export default login1;
