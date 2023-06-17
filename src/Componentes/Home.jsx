import { Message } from 'semantic-ui-react';


const Home = () =>{
    return(
        <div className="App">
         <Message >
            <Message.Header>Bienvenidos a nuestra app de Clientes</Message.Header>
            <Message.List>
                <Message.Item>
                    Registramos Clientes para su empresa</Message.Item>
                <Message.Item>
                    Obtenemos datos de los registros de Clientes</Message.Item>
            </Message.List>
        </Message>
        </div>
    )
}

export default Home;