import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo";
import Form1 from "../Components/RegisterSteps/Form1";
import Form2 from "../Components/RegisterSteps/Form2";
import Form3 from "../Components/RegisterSteps/Form3";
import Form4 from "../Components/RegisterSteps/Form4";
const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="w-[284px] pt-24">
      {/* logo */}
      <Logo />
      {/* nav */}
      <nav className="flex mt-12">
        <div className="box-nav box-nav-active relative">
          <button className="absolute left-2">
            <img
              src="./img/flecha-right.png"
              alt=""
              onClick={() => setStep(step === 1 ? 1 : step - 1)}
            />
          </button>
          <button>
            <h3 className="font-semibold text-base text-white">Cadastrar</h3>
          </button>
        </div>
        <div className="box-nav ">
          <NavLink to="/login">
            <h3 className="font-semibold text-base text-white">Login</h3>
          </NavLink>
        </div>
      </nav>
      {/* formulario */}
      {step === 1 && <Form1 setStep={setStep} />}
      {step === 2 && <Form2 setStep={setStep} />}
      {step === 3 && <Form3 setStep={setStep} />}
      {step === 4 && <Form4 />}
      <div className="w-full h-[6px] bg-linea mt-4">
        <div className="bg-linea-porcentaje"></div>
      </div>
      <p className="text-porcentaje text-center mt-2">Passo {step}/4</p>
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

export default Register;
