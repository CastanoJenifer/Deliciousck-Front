import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'


const Comentarios = ({ recetaId }) => {
  const [nombrepersona, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [valoracion, setValoracion] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleValoracionChange = (event) => {
    setValoracion(event.target.value);
  };

  
    const fetchData = async () => {
      if (!recetaId) return;
      try {
        const response = await axios.get(`http://localhost:3000/recetas/mostrarComentarios/${recetaId}`);
        if (response.status === 200) {
            console.log('Comentarios obtenidos:', response.data.com);
          setComentarios(response.data.com);
        } else {
          console.error('Error al obtener comentarios:', response.statusText);
        }
      } catch (error) {
        console.error('Error de red:', error.message);
      }
    };
  
    useEffect(() => {
        fetchData();
      }, [recetaId]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (!nombrepersona.trim() || !comentario.trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar el nombre y comentario.',
          });
          return
      }
  
      const valoracionToSend = valoracion > 0 ? valoracion : null

    const nuevoComentario = {
      receta: recetaId,
      nombrepersona,
      comentario,
      valoracion: valoracionToSend,
    };

    try {
        const response = await axios.post('http://localhost:3000/recetas/realizarComentario', nuevoComentario);
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Comentario enviado con éxito!',
                showConfirmButton: false,
                timer: 1500, // Cierra automáticamente después de 1.5 segundos
              });

          setComentarios([...comentarios, nuevoComentario]);
          setNombre('');
          setComentario('');
          setValoracion('');
          setComentarios((prevComentarios) => [...prevComentarios]);
        } else {
          console.error('Error al enviar comentario:', response.statusText);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un problema al enviar el comentario. Por favor, inténtalo de nuevo.',
          });
        }
      } catch (error) {
        console.error('Error de red:', error.message);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un problema de red. Por favor, inténtalo de nuevo.',
          });
      }
  };
 
  const renderValoracion = (value) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setValoracion(i)}
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: i <= value ? '#FFD700' : '#ccc',
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', padding: '20px' }}>
    {/* Formulario para ingresar comentarios */}
    <div style={{ border: '2px solid #4CAF50', borderRadius: '10px', padding: '20px', width: '40%', margin: 'auto', marginBottom: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <label style={{ fontSize: '16px', marginBottom: '5px', marginLeft: '12px'}}>Nombre:</label>
            <input type="text" value={nombrepersona} onChange={handleNombreChange} style={{ marginLeft: '10px', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ fontSize: '16px', marginBottom: '5px', marginRight: '8px' }}>
            <textarea
            value={comentario}
            onChange={handleComentarioChange}
            placeholder="Dejar un comentario..."
            style={{ width: '100%', marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
        </label>
        </div>

            <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label style={{ fontSize: '16px', marginBottom: '5px',  marginLeft: '15px' }}>Valoración: {renderValoracion(valoracion)}</label>
            </div>
            <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '12px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px', fontSize: '16px' }}>
                Enviar comentario
            </button>
            </form>
  </div>


      {/* Visualización de comentarios */}
      <div style={{ width: '80%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(45%, 1fr))', gap: '20px' }}>
      <h1 style={{ gridColumn: 'span 2', textAlign: 'center', borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '20px', color: '#4CAF50' }}>
        COMENTARIOS ANTERIORES
      </h1>
        {comentarios.map((comentario, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '15px', border: '1px solid #ccc', borderRadius: '10px' }}>
          <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>Nombre: {comentario.nombrepersona}</p>
          <p style={{ marginBottom: '8px' }}>Comentario: {comentario.comentario}</p>
          <p style={{ marginBottom: '8px' }}>
            Valoración: {renderValoracion(comentario.valoracion)}
          </p>
          <hr style={{ marginBottom: '0px' }} />
        </div>
        ))}
      </div>
   </div>
  );
};
 

export default Comentarios;


    

