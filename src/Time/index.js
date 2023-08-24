import Colaborador from '../componentes/Colaborador'
import './Time.css'




function Time(props){

    return(
      
       props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBlockColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimaria}  key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}


export default Time
