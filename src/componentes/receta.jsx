import '../app.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const RecetaCard = ({cod, nombre, tipo, tiempoduracion, imagenprincipal}) => {

    const navigate = useNavigate();

    const goToDetallesReceta = () => {
        navigate(`/detallesReceta/${cod}`);

    };

    return (
        <div className="flex flex-col items-center justify-center w-80 h-100 p-4 targeta card"
             onClick={goToDetallesReceta}>
            <img src={`http://localhost:3000/${imagenprincipal}`} alt="Imagen de la receta" className="w-full h-56 mb-4" />
            <h2 className="text-xl font-bold mb-2">{nombre || 'No encontrada'}</h2>
            <p className="text-slate-800 mb-2">{tipo || 'Indefinido'}</p>
            <p className="text-gray-800">{tiempoduracion  || '00:00:00'}</p>
        </div>
    );
};

RecetaCard.propTypes = {
    cod: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    tiempoduracion: PropTypes.string.isRequired,
    imagenprincipal: PropTypes.string.isRequired,
};

export default RecetaCard;

