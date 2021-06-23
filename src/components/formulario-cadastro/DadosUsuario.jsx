import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({ email, senha });
            }
            
        }}>
            <TextField id="email" name="email" label="email" type="email" variant="outlined"  fullWidth margin="normal" required
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                  }}/>

            <TextField id="senha" name="senha" label="senha" type="password" variant="outlined"  fullWidth margin="normal" required
                value={senha}
                error={erros.senha.valido}
                helperText={erros.senha.texto}
                onChange={(event) => {
                    setSenha(event.target.value);
                  }}
                onBlur={validarCampos}/>

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;