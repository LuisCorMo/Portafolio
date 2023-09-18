import { useEffect, useState } from "react";

const Contact = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((segundosAnteriores) => {
        if (segundosAnteriores >= 10) {
          clearInterval(intervalId);
          return segundosAnteriores;
        } else {
          return segundosAnteriores + 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="mx-4 mt-6 text-gray-900 dark:text-gray-200">
      <div>Segundos transcurridos: {segundos}</div>
    </div>
  );
};
export default Contact;
