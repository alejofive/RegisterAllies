import { NavLink } from "react-router-dom";
import Logo from "../Components/logo";
const Login2 = () => {
  return (
    <div className="w-[284px] pt-24">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12">
        <div className="box-nav box-nav-active relative">
          <NavLink to="/" className="absolute left-2">
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
      {/* formulario */}
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
        <NavLink to="/login3">
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
      </form>
    </div>
  );
};

export default Login2;
