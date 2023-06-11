const cards = () => {
  const tipes = [
    { title: "Bar, restaurante, cafetaria", image: "./img/Icons1.png" },
    { title: "Criador de conteúdo, influenciador", image: "./img/Icons2.png" },
    { title: "Motorista / Uber / 99 / Táxi", image: "./img/Icons3.png" },
    { title: "Time ou liga", image: "./img/Icons4.png" },
    { title: "Barbería", image: "./img/Icons5.png" },
    { title: "Treinador", image: "./img/Icons6.png" },
    { title: "Clube/quadra poliesportiva", image: "./img/Icons7.png" },
    { title: "Atletismo universitário", image: "./img/Icons8.png" },
    { title: "Consultor de vendas", image: "./img/Icons9.png" },
    { title: "Banca de Jornais", image: "./img/Icons10.png" },
    { title: "Outro", image: "./img/Icons11.png" },
  ];
  return (
    <>
      {tipes.map((item) => (
        <div className="col-span-2">
          <div className="p-4 rounded-xl border flex justify-center items-center">
            <img src={item.image} alt="" />
          </div>
          <p className="text-center text-[10px] text-tipe px-1 mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default cards;
