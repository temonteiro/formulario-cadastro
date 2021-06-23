import React, { useState, useContext } from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}){
    const [nome,  setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }
            
        }}>
            <TextField id="nome" name="nome" label="Nome" variant="outlined"  fullWidth margin="normal" 
                value={nome}
                error={erros.nome.valido}
                helperText={erros.nome.texto}
                onChange={(evento)=> {
                    setNome(evento.target.value)
                }}
                onBlur={validarCampos}/>

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"
                value={sobrenome}
                onChange={(evento)=> {
                    setSobrenome(evento.target.value)
                }}/>

            <TextField id="CPF" name="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
                value={cpf}
                error={erros.cpf.valido}
                helperText={erros.cpf.texto}
                onChange={(evento)=> {
                    setCPF(evento.target.value)
                }}
                onBlur={validarCampos}
                />

            <FormControlLabel label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        name="promocoes"
                        color="primary"
                        onChange={(evento)=> {
                            setPromocoes(evento.target.checked)
                        }}
                    />
                }
            />

            <FormControlLabel label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        name="novidades"
                        color="primary"
                        onChange={(evento)=> {
                            setNovidades(evento.target.checked)
                        }}
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;