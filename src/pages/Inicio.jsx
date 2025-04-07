import Formulario from '../components/Formulario'
import TablaUsuarios from '../components/TablaUsuarios'

const Inicio = () => {

    return (
        <>
            <h1 className="text-center text-blue-500 font-bold text-4xl my-5">Usuarios</h1>
            <hr />
            <Formulario />
            <TablaUsuarios />
        </>
    )
}

export default Inicio