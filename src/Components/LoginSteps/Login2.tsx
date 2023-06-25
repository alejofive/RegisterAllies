export const Login2 = () => {
  return (
    <div className="box-info w-full mt-6 flex flex-col items-center p-7 mb-4">
      <img
        className="w-[48px] h-[48px] object-contain"
        src="./img/check_circle.png"
        alt=""
      />
      <h1 className="text-xl text-white font-medium mt-4 mb-4">
        Usuário Registrado
      </h1>
      <p className="text-center text-base font-light">
        Verifique seu endereço de e-mail para validar sua conta.
      </p>
      <button className="style-button2 w-[180px] h-[48px] mt-4">Aceitar</button>
    </div>
  );
};
