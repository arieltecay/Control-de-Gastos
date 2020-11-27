import React, { useState } from 'react'

export const Recibo = () => {
    const [mostrarModal, setMostrarModal] = useState(false)
    
    return (
        <div>
            {mostrarModal &&
                <h1>Recibo</h1>
            }
        </div>
    )
}
