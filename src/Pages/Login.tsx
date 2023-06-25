import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login1 from "../Components/LoginSteps/Login1";
import { Login2 } from "../Components/LoginSteps/Login2";
import Logo from "../Components/Logo";

export const Login = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="w-[354px] pt-24 flex flex-col items-center">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12 ">
        <div className="box-nav  relative">
          <NavLink to="/">
            <h3 className="font-semibold text-base text-white">Cadastrar</h3>
          </NavLink>
        </div>
        <div className="box-nav box-nav-active">
          <button>
            <h3 className="font-semibold text-base text-white">Login</h3>
          </button>
        </div>
      </nav>
      {step === 1 && <Login1 setStep={setStep} />}
      {step === 2 && <Login2 />}

      <button className="mt-2 w-full style-button font-semibold text-base py-[14px]">
        Esqueci minha senha ou nome de usuário
      </button>
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
  );
};
